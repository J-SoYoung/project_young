import { useNavigate } from "react-router-dom";
import styles from "./styles/home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate(`/detail/${1}`);
  };

  return (
    <main className={styles.main}>
      {[1, 2, 3, 4,5,6,7,8,9,10].map((item) => (
        <article
          key={item}
          className={styles.article}
          onClick={() => movePage()}
        >
          <img
            src="https://placehold.co/150"
            alt="thumbnail"
            className={styles.thumbnail}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>Our Mission</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
        </article>
      ))}
    </main>
  );
};
