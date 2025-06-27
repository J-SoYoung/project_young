import { Link } from "react-router-dom";
import styles from "./deepdives.module.css";
export const DeepDives = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Deep Dives</h1>
        <p>다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다</p>
      </div>

      {/* DeepDive 항목들 */}
      <ul className={styles.deepdivesList}>
        <Link to={"/deepdives/1"}>
          <img src="/icons/react.svg" alt="React" />
          <span>React 프로젝트 구조 설계</span>
        </Link>
        <Link to={"/deepdives/1"}>
          <img src="/icons/react.svg" alt="React" />
          <span>React 프로젝트 구조 설계</span>
        </Link>
        <Link to={"/deepdives/1"}>
          <img src="/icons/js.svg" alt="JavaScript" />
          <span>JavaScript의 this 완전정복</span>
        </Link>
      </ul>
    </main>
  );
};
