import styles from "./styles/home.module.css";

export const Home = () => {
  return (
    <main className={styles.main}>
      {[1, 2, 3, 4].map((item) => (
        <article key={item} className={styles.article}>
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
