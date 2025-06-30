import { Link } from "react-router-dom";
import styles from "./thoughts.module.css";
import { thoughts } from "../home/exampleData";

export const Thoughts = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Thoughts</h1>
        <p>개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다</p>
      </div>

      {/* 노트 항목들 */}
      <ul className={styles.notesList}>
        {thoughts.map((post) => (
          <li key={post.id}>
            <time>{post.date}</time>
            <p>
              <Link to={post.link}>{post.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};
