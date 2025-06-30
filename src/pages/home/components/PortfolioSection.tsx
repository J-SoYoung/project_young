import { Link } from "react-router-dom";
import styles from "../styles/portfolioSection.module.css";

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

export const PortfolioSection = ({ posts }: Props) => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.sectionTitle}>
        <h2>
          <span>Portfolio</span>
          <Link to={"/portfolio"}>모두 보기</Link>
        </h2>
        <p>다양한 프로젝트와 작업물을 정리한 포트폴리오입니다</p>
      </div>
      <ul className={styles.portfolioList}>
        {posts.map((post) => (
          <li key={post.id}>
            <time>{post.date}</time>
            <div>
              <strong>{post.title}</strong>
            </div>
            <p>{post.description}</p>
            <a href={post.githublink}>github</a>
            <a href={post.link}> 포트폴리오 더보기 </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
