import { Link } from "react-router-dom";
import styles from "../styles/section.module.css";

import {
  ListsDeepDive,
  ListsNote,
  ListsPortfolio
} from "../../../shared/components";

import { Post } from "../../../shared/types/posts";

type Props = {
  title: string;
  moreToLink: string;
  description: string;
  posts: Post[];
};

export const Section = ({ title, moreToLink, description, posts }: Props) => {
  const renderPosts = () => {
    switch (title) {
      case "Tech Notes":
        return <ListsNote posts={posts} />;
      case "Thoughts":
        return <ListsNote posts={posts} />;
      case "Deep Dives":
        return <ListsDeepDive posts={posts} />;
      case "Portfolio":
        return <ListsPortfolio posts={posts} />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>
          <span>{title}</span>
          <Link to={moreToLink}>모두 보기</Link>
        </h2>
        <p>{description}</p>
      </div>
      {renderPosts()}
    </section>
  );
};
