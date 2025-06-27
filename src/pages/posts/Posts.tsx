import styles from "./styles/posts.module.css";

export const Posts = () => {
  return (
    <main className={styles.postDetailContainer}>
      <h1 className={styles.postTitle}>
        Bigger, heavier, more efficient: A deep-dive on cars in the United
        States
      </h1>

      {/* 작성자, 날짜, 좋아요 */}
      <div className={styles.postMeta}>
        <div className={styles.authorInfo}>
          <img
            src="https://placehold.co/50x50"
            alt="Author"
            className={styles.authorAvatar}
          />
          <div>
            <span className={styles.authorName}>HANNAH RITCHIE</span>
            <span className={styles.postDate}>Today at 11:37 AM</span>
          </div>
        </div>
        <span className={styles.postLikeCount}>❤️ 42</span>
      </div>

      {/* 글 내용 */}
      <article className={styles.postContent}>
        <p>
          One of the biggest culture shocks for Europeans going to the US is its
          cars. They’re bigger, heavier and people drive everywhere...
        </p>
        <p>
          In many parts of the country, walking is not an option. There is no
          pavement to walk on. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut
          maiores provident veritatis similique, aliquam voluptas laboriosam
          tempora doloribus ipsa! Ea assumenda sed iste alias veniam!
        </p>
        <p>
          In many parts of the country, walking is not an option. There is no
          pavement to walk on. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut
          maiores provident veritatis similique, aliquam voluptas laboriosam
          tempora doloribus ipsa! Ea assumenda sed iste alias veniam!
        </p>
      </article>

      {/* 좋아요 버튼 */}
      <section className={styles.insightSection}>
        <h4>Did you find this insightful?</h4>
        <div className={styles.feedbackButtons}>
          <button>😐 Nope</button>
          <button>🙂 Sort of</button>
          <button>😍 Absolutely</button>
        </div>
      </section>

    </main>
  );
};
