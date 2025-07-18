import { Link } from "react-router-dom";
import styles from "./listsStyle.module.css";
import { Post } from "../../types/posts";

export const ListsDeepDive = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.deepdivesList}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/detail/${post.category}/${post.id}`}>
            <img src={post.imageSrc} alt={post.title} />
            <strong>{post.title}</strong>
          </Link>
        </li>
      ))}
    </ul>
  );
};
