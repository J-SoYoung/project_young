import { Link } from "react-router-dom";
import styles from "./listNote.module.css";
import { Post } from "../../types/posts";

export const ListsNote = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.notesList}>
      {posts.map((post) => (
        <li key={post.id}>
          <time>{post.date}</time>
          <p>
            <Link to={`/detail/${post.category}/${post.id}`}>{post.title}</Link>
          </p>
        </li>
      ))}
    </ul>
  );
};
