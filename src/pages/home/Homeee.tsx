import styles from "./homeee.module.css";

export const Homeee = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>DEV.SoYoung</div>
        <nav className={styles.nav}>
          <nav>메뉴버튼</nav>
          <button>다크모드</button>
          <button>깃허브</button>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.greeting}>
          <h1>안녕하세요♥ 정소영입니다.</h1>
          <div>
            프론트엔드 개발자이자 블로거입니다.
            <br />
            Develop의 Weaver가 되고자 합니다. 모든 것을 엮어 최고의 결과물을
            만들어내는 사람이 되고자합니다.
            <br />
            <p>
              블로그의 모든 글은 AI가 아닌 제가 작성한 글입니다. Everything here
              is written by me, not AI.
            </p>
          </div>
        </section>

        <section id="tech-notes" className={styles.notesSection}>
          <div className={styles.sectionTitle}>
            <h2>Tech Notes</h2>
            <p>프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다</p>
          </div>
          <ul className={styles.notesList}>
            <li>
              <time>2025.03</time>
              <p>
                <a href="#">React 상태 관리 리팩토링</a>
              </p>
            </li>
            <li>
              <time>2024.12</time>
              <p>
                <a href="#">Vite PWA 프로젝트 배포기</a>
              </p>
            </li>
          </ul>
        </section>

        <section id="thoughts" className={styles.notesSection}>
          <div className={styles.sectionTitle}>
            <h2>Thoughts</h2>
            <p>개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다</p>
          </div>
          <ul className={styles.notesList}>
            <li>
              <time>2025.01</time>
              <p>
                <a href="#">개발자와 커뮤니케이션 감각</a>
              </p>
            </li>
            <li>
              <time>2024.11</time>
              <p>
                <a href="#">나만의 블로그를 만든 이유</a>
              </p>
            </li>
          </ul>
        </section>

        <section id="deep-dives" className={styles.deepdivesSection}>
          <h2>Deep Dives</h2>
          <p>다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다</p>
          <ul className={styles.deepdivesList}>
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
          <h2>Portfolio</h2>
          <p>다양한 프로젝트와 작업물을 정리한 포트폴리오입니다</p>
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
              <time>2023</time>
              <p>
                <strong>Mini Vite Blog</strong>
              </p>
              <p>Vite + Firebase 블로그 프로젝트</p>
              <a href="#">Demo</a> · <a href="#">Related Article</a>
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <div>
            <a href="#">Email</a> · <a href="#">RSS feed</a> ·{" "}
            <a href="https://github.com">GitHub</a> ·{" "}
            <a href="#">Buy me a coffee</a>
          </div>
          <p>© 2025 DEV.SoYoung. All rights reserved.</p>
          <p>Made with ♥ by Soyoung</p>
        </footer>
      </main>
    </>
  );
};
