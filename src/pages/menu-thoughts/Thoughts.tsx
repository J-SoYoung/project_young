import { Link } from "react-router-dom";
import styles from "./thoughts.module.css";

export const Thoughts = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Thoughts</h1>
        <p>개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다</p>
      </div>

      {/* 노트 항목들 */}
      <ul className={styles.notesList}>
        <li>
          <time>2025.01</time>
          <p>
            <Link to="/thought/1">개발자와 커뮤니케이션 감각</Link>
          </p>
        </li>
        <li>
          <time>2025.01</time>
          <p>
            <Link to="/pothoughtsts/1">개발자와 커뮤니케이션 감각</Link>
          </p>
        </li>
        <li>
          <time>2024.11</time>
          <p>
            <Link to="/thought/1">나만의 블로그를 만든 이유</Link>
          </p>
        </li>
      </ul>
    </main>
  );
};
