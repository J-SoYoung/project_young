import { Link } from "react-router-dom";
import styles from "./techNotes.module.css";
import { techNotes } from "../home/exampleData";

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
        {techNotes.map((post) => (
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
