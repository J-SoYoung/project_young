import { Link } from "react-router-dom";
import styles from "./listDeepdive.module.css";
import { Post } from "../../types/posts";
import { paths } from "../../../routers/paths";

export const ListsDeepDive = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={styles.deepdivesList}>
      {posts.map((post) => {
        if (post.id) {
          return (
            <li key={post.id}>
              <Link to={paths.detail({ id: post.id })}>
                <img src={post.imageSrc} alt={post.title} />
                <strong>{post.title}</strong>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
