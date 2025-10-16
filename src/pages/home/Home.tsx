import { useQueries } from "@tanstack/react-query";

import styles from "./styles/home.module.css";
import { Section } from "./components/Section";
import { Gretting } from "./components/Greeting";

import { getPostsByCategory } from "../../shared/apis/posts";
import { CATEGORIES, CATEGORY_META } from "../../shared/types/category";
import { paths } from "../../routers/paths";
import { SearchBar } from "../../shared/components";
import { keys } from "../../shared/query/keys";

export const Home = () => {
  const results = useQueries({
    queries: CATEGORIES.map((category) => ({
      queryKey: keys.posts.list(category),
      queryFn: async () => {
        const posts = await getPostsByCategory(category);
        return posts;
      },
      staleTime: 60 * 1000, // 1분 동안 fresh → 재방문 시 재요청 안 함
      gcTime: 10 * 60 * 1000, // 10분 동안 언마운트돼도 캐시 보존
      placeholderData: () => []
    })),
    combine: (res) => {
      return {
        isLoading: res.some((r) => r.isLoading),
        isError: res.some((r) => r.isError),
        data: res.map((r) => r.data)
      };
    }
  });

  const { data, isLoading, isError } = results;
  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error occurred</div>;

  return (
    <main className={styles.main}>
      <Gretting />
      <SearchBar />
      {CATEGORIES.map((c, idx) => {
        return (
          <Section
            key={idx}
            title={CATEGORY_META[c].label}
            moreToLink={paths.menu({ category: c })}
            description={CATEGORY_META[c].description}
            posts={data[idx] || []}
          />
        );
      })}
    </main>
  );
};

// 데이터 반환 형태 튜플 => react-query캐시 같이 쓰기어려움. 
// 카테고리 페이지에서 사용하는 posts데이터 형태와 다름
// export const Home = () => {
//   const results = useQueries({
//     queries: CATEGORIES.map((category) => ({
//       queryKey: keys.posts.list(category),
//       queryFn: async () => {
//         const posts = await getPostsByCategory(category);
//         return [category, posts] as const;
//         // return posts
//       },
//       staleTime: 60 * 1000, // 1분 동안 fresh → 재방문 시 재요청 안 함
//       gcTime: 10 * 60 * 1000, // 10분 동안 언마운트돼도 캐시 보존
//       placeholderData: () => [category, []] as const
//     })),
//     combine: (res) => {
//       const entries = res.map(
//         (r, i) => r.data ?? ([CATEGORIES[i], []] as const)
//       );
//       return {
//         isLoading: res.some((r) => r.isLoading),
//         isError: res.some((r) => r.isError),
//         data: Object.fromEntries(entries)
//       };
//     }
//   });
//   console.log('home데이터형식',results.data);
//   const { data, isLoading, isError } = results;
//   if (isLoading) return <div>Loading...</div>;
//   if (isError || !data) return <div>Error occurred</div>;

//   return (
//     <main className={styles.main}>
//       <Gretting />
//       <SearchBar />
//       {CATEGORIES.map((c, idx) => {
//         return (
//           <Section
//             key={idx}
//             title={CATEGORY_META[c].label}
//             moreToLink={paths.menu({ category: c })}
//             description={CATEGORY_META[c].description}
//             posts={data[c]}
//           />
//         );
//       })}
//     </main>
//   );
// };
