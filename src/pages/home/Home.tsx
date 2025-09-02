import { useEffect, useState } from "react";

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

type PostsByCategory = Record<Category, Post[]>;

export const Home = () => {
  const [postsByCategory, setPostsByCategory] = useState<PostsByCategory>({
    "tech-notes": [],
    thoughts: [],
    deepdives: [],
    portfolio: []
  });

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        CATEGORIES.map(async (category) => {
          const posts = await getPostsByCategory(category);
          // 배열반환, type 튜플로 인식, Category임을 명확히 선언
          return [category, posts] as const;
        })
      );

      // 배열을 객체로 변환, 예: { "tech-notes": [...] }
      const mapped = Object.fromEntries(results) as PostsByCategory;
      setPostsByCategory(mapped);
    };
    fetchAll();
  }, []);

  console.log(postsByCategory);
  return (
    <main className={styles.main}>
      <Gretting />
      {CATEGORIES.map((c, idx) => {
        return (
          <Section
            key={idx}
            title={CATEGORY_META[c].label}
            moreToLink={paths.menu({ category: c })}
            description={CATEGORY_META[c].description}
            posts={postsByCategory[c]}
          />
        );
      })}
    </main>
  );
};
