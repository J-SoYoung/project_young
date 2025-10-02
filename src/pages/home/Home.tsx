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
        return [category, posts] as const;
      }
    })),
    combine: (res) => {
      const entries = res.map(
        (r, i) => r.data ?? ([CATEGORIES[i], []] as const)
      );
      return {
        isLoading: res.some((r) => r.isLoading),
        isError: res.some((r) => r.isError),
        data: Object.fromEntries(entries)
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
            posts={data[c]}
          />
        );
      })}
    </main>
  );
};
