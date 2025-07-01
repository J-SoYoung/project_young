import { Link } from "react-router-dom";
import styles from "../styles/deepdiveLists.module.css";

type Props = {
  posts: {
    id: string;
    date: string;
    title: string;
    link: string;
    imageSrc: string;
    imageDesc: string;
  }[];
};

export const DeepdiveLists = ({ posts }: Props) => {
  return (
    <ul className={styles.deepdivesList}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.link}>
            <img src={post.imageSrc} alt={post.imageDesc} />
            <span>{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
