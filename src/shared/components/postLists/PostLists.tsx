import { useNavigate } from "react-router-dom";
import styles from "./postLists.module.css";

export const PostLists = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <article
          key={item}
          className={styles.article}
          onClick={() => navigate(`/posts/${item}`)}
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
