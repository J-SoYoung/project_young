import { Link } from "react-router-dom";
import styles from "../styles/listsStyle.module.css";

type Props = {
  posts: {
    id: string;
    date: string;
    title: string;
    description: string;
    githublink: string;
    link: string;
  }[];
};

export const ListsPortfolio = ({ posts }: Props) => {
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
          <Link to={post.link}> 포트폴리오 더보기 </Link>
        </li>
      ))}
    </ul>
  );
};
