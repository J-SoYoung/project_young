import { Link } from "react-router-dom";
import styles from "./listNote.module.css";
import { Post } from "../../types/posts";
import { paths } from "../../../routers/paths";

export const ListsNote = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.notesList}>
      {posts.map((post) => {
        if (post.id) {
          return (
            <li key={post.id}>
              <time>{post.createdAt}</time>
              <p>
                <Link to={paths.detail({ id: post.id })}>{post.title}</Link>
              </p>
            </li>
          );
        }
      })}
    </ul>
  );
};
