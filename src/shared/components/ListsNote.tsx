import { Link } from "react-router-dom";
import styles from "../styles/listsStyle.module.css";

type Props = {
  posts: {
    id: string;
    date: string;
    title: string;
    link: string;
  }[];
};

export const ListsNote = ({ posts }: Props) => {
  return (
    <ul className={styles.notesList}>
      {posts.map((post) => (
        <li key={post.id}>
          <time>{post.date}</time>
          <p>
            <Link to={post.link}>{post.title}</Link>
          </p>
        </li>
      ))}
    </ul>
  );
};
