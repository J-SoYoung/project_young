import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import styles from "./menuMoreListsPage.module.css";
import { getMenuConfig } from "./getMenuConfig";

import { getPostsByCategory } from "../../shared/apis/posts";
import { keys } from "../../shared/query/keys";
import { Post } from "../../shared/types/posts";

export const MenuMoreListsPage = () => {
  const { category } = useLoaderData();

  const {
    data,
    isLoading
    // isError,
    // error
  } = useQuery({
    queryKey: keys.posts.list(category),
    queryFn: () => getPostsByCategory(category),
    enabled: !!category
  });

  const [categoryData, postsData] = data as [string, Post[]];
  if (!data) return <p>포스트를 찾을 수 없습니다</p>;
  const { title, component, desc } = getMenuConfig({ categoryData, postsData });

  if (isLoading) return <p>로딩중</p>;

  return (
    <main className={styles.container}>
      <header className={styles.titleContainer}>
        <h1 className="title">{title}</h1>
        <p>{desc}</p>
      </header>

      {/* posts list */}
      {component}
    </main>
  );
};
