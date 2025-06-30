import { Link } from "react-router-dom";
import styles from "../styles/deepSection.module.css";

type Props = {
  posts: {
    id: string;
    date: string;
    title: string;
    link: string;
    imageSrc: string;
    imageDesc: string;
  }[];
};

export const DeepSection = ({ posts }: Props) => {
  return (
    <section id="deep-dives" className={styles.deepdivesSection}>
      <div className={styles.sectionTitle}>
        <h2>
          <span>Deep Dives</span>
          <Link to={"/deepdives"}>모두 보기</Link>
        </h2>
        <p>다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다</p>
      </div>
      <ul className={styles.deepdivesList}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.link}>
              <img src={post.imageSrc} alt={post.imageDesc} />
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
