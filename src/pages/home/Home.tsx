import styles from "./home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.greeting}>
        <h1>
          안녕하세요
          <br />
          Frontend Developer
          <br />
          정소영입니다.
        </h1>
        <div>
          프론트엔드 개발자이자 블로거입니다.
          <br />
          저는 Weaver입니다. 모든 것을 엮어 최고의 결과물을 만들어냅니다.
          <br />
          <p>Everything here is written by me, not AI.</p>
        </div>
      </section>

      <section id="tech-notes" className={styles.notesSection}>
        <div className={styles.sectionTitle}>
          <h2>
            <span>Tech Notes</span>
            <Link to={"/notes"}>모두 보기</Link>
          </h2>
          <p>프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다</p>
        </div>
        <ul className={styles.notesList}>
          <li>
            <time>2025.03</time>
            <p>
              <Link to="/notes/1">React 상태 관리 리팩토링</Link>
            </p>
          </li>
          <li>
            <time>2025.03</time>
            <p>
              <Link to="/notes/1">React 상태 관리 리팩토링</Link>
            </p>
          </li>
          <li>
            <time>2024.12</time>
            <p>
              <Link to="/notes/1">Vite PWA 프로젝트 배포기</Link>
            </p>
          </li>
        </ul>
      </section>

      <section id="thoughts" className={styles.notesSection}>
        <div className={styles.sectionTitle}>
          <h2>
            <span>Thoughts</span>
            <Link to={"/thoughts"}>모두 보기</Link>
          </h2>
          <p>개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다</p>
        </div>
        <ul className={styles.notesList}>
          <li>
            <time>2025.01</time>
            <p>
              <Link to="/posts/1">개발자와 커뮤니케이션 감각</Link>
            </p>
          </li>
          <li>
            <time>2025.01</time>
            <p>
              <Link to="/posts/1">개발자와 커뮤니케이션 감각</Link>
            </p>
          </li>
          <li>
            <time>2024.11</time>
            <p>
              <Link to="/posts/1">나만의 블로그를 만든 이유</Link>
            </p>
          </li>
        </ul>
      </section>

      <section id="deep-dives" className={styles.deepdivesSection}>
        <div className={styles.sectionTitle}>
          <h2>
            <span>Deep Dives</span>
            <Link to={"/deepdives"}>모두 보기</Link>
          </h2>
          <p>다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다</p>
        </div>
        <ul className={styles.deepdivesList}>
          <li>
            <img src="/icons/react.svg" alt="React" />
            <span>React 프로젝트 구조 설계</span>
          </li>
          <li>
            <img src="/icons/react.svg" alt="React" />
            <span>React 프로젝트 구조 설계</span>
          </li>
          <li>
            <img src="/icons/js.svg" alt="JavaScript" />
            <span>JavaScript의 this 완전정복</span>
          </li>
        </ul>
      </section>

      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.sectionTitle}>
          <h2>
            <span>Portfolio</span>
            <Link to={"/portfolio"}>모두 보기</Link>
          </h2>
          <p>다양한 프로젝트와 작업물을 정리한 포트폴리오입니다</p>
        </div>
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
