import { Link } from "react-router-dom";
import styles from "../styles/listsStyle.module.css";
import { Post } from "../types/posts";


export const ListsPortfolio = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.portfolioList}>
      {posts.map((post) => (
        <li key={post.id}>
          <time>{post.date}</time>
          <div>
            <strong>{post.title}</strong>
          </div>
          <p>{post.description}</p>
          <a href={post.githublink} target="_blank">
            github
          </a>
          <Link  to={`/detail/${post.category}/${post.id}`}> 포트폴리오 더보기 </Link>
        </li>
      ))}
    </ul>
  );
};
