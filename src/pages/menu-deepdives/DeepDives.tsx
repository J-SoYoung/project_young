import { Link } from "react-router-dom";

import styles from "./deepdives.module.css";
import { deepdives } from "../home/exampleData";

export const DeepDives = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Deep Dives</h1>
        <p>다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다</p>
      </div>

      {/* DeepDive 항목들 */}
       <ul className={styles.deepdivesList}>
        {deepdives.map((post) => (
          <li key={post.id}>
            <Link to={post.link}>
              <img src={post.imageSrc} alt={post.imageDesc} />
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
