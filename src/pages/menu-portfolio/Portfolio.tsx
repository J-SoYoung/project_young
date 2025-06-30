import styles from "./portfolio.module.css";

import { portfolio } from "../home/exampleData";

export const Portfolio = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Portfolio</h1>
        <p className="description">
          다양한 프로젝트와 작업물을 정리한 포트폴리오입니다
        </p>
      </div>

      {/* 포트폴리오 항목들 */}
      <ul className={styles.portfolioList}>
        {portfolio.map((post) => (
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
    </main>
  );
};
