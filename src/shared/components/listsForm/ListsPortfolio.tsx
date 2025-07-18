import { Link } from "react-router-dom";
import styles from "./listPortfolio.module.css";
import { Post } from "../../types/posts";

export const ListsPortfolio = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.portfolioList}>
      {posts.map((post) => (
        <li key={post.id}>
          <time>{post.date}</time>
          <strong>{post.title}</strong>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.portfolioLinks}>
            <a href={post.githublink} target="_blank">
              github
            </a>
            <Link to={`/detail/${post.category}/${post.id}`}>
              포트폴리오 더보기
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
