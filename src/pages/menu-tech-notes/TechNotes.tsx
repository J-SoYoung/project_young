import { Link } from "react-router-dom";
import styles from "./techNotes.module.css";

export const TechNotes = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Tech Notes</h1>
        <p className="description">
          프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다
        </p>
      </div>

      {/* 노트 항목들 */}
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
            <Link to="/notes/2">React 상태 관리 리팩토링</Link>
          </p>
        </li>
        <li>
          <time>2024.12</time>
          <p>
            <Link to="/notes/3">Vite PWA 프로젝트 배포기</Link>
          </p>
        </li>
      </ul>
    </main>
  );
};
