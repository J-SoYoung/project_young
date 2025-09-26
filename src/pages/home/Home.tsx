import { useQueries } from "@tanstack/react-query";

import styles from "./styles/home.module.css";
import { Section } from "./components/Section";
import { Gretting } from "./components/Greeting";

import { Post } from "../../shared/types/posts";
import { getPostsByCategory } from "../../shared/apis/posts";
import {
  CATEGORIES,
  Category,
  CATEGORY_META
} from "../../shared/types/category";
import { paths } from "../../routers/paths";
import { SearchBar } from "../../shared/components";
import { keys } from "../../shared/query/keys";

type PostsByCategory = Record<Category, Post[]>;

export const Home = () => {
  const results = useQueries({
    queries: CATEGORIES.map((category) => ({
      queryKey: keys.posts.list(category),
      queryFn: () => getPostsByCategory(category),
      staleTime: 60_000
    })),
    combine: (res) => ({
      isLoading: res.some((r) => r.isLoading),
      isError: res.some((r) => r.isError),
      data: Object.fromEntries(
        CATEGORIES.map((c, i) => [c, res[i].data ?? []] as const)
      ) as PostsByCategory
    })
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
