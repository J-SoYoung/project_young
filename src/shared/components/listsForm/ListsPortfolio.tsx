import { Link } from "react-router-dom";
import styles from "./listPortfolio.module.css";
import { Post } from "../../types/posts";
import { paths } from "../../../routers/paths";

export const ListsPortfolio = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.portfolioList}>
      {posts.map((post) => {
        if (post.id) {
          return (
            <li key={post.id}>
              <time>{post.createdAt}</time>
              <strong>{post.title}</strong>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.portfolioLinks}>
                <a href={post.githublink} target="_blank">
                  github
                </a>
                <Link to={paths.detail({ id: post.id })}>
                  포트폴리오 더보기
                </Link>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};
