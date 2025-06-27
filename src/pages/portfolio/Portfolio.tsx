import styles from "./portfolio.module.css";

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
      <section className="portfolio_list">
        <ul className={styles.portfolioList}>
          <li>
            <time>2024</time>
            <p>
              <strong>BOOKSOME</strong>
            </p>
            <p>독서 다이어리 기반 리뷰 서비스</p>
            <a href="#">Demo</a> · <a href="#">Related Article</a>
          </li>
          <li>
            <time>2024</time>
            <p>
              <strong>BOOKSOME</strong>
            </p>
            <p>독서 다이어리 기반 리뷰 서비스</p>
            <a href="#">Demo</a> · <a href="#">Related Article</a>
          </li>
          <li>
            <time>2023</time>
            <p>
              <strong>Mini Vite Blog</strong>
            </p>
            <p>Vite + Firebase 블로그 프로젝트</p>
            <a href="#">Demo</a> · <a href="#">Related Article</a>
          </li>
        </ul>
      </section>
    </main>
  );
};
