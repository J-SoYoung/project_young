import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";

import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import { deepdives, portfolio, techNotes, thoughts } from "../home/exampleData";

type PostData = {
  author: string;
  authorProfile: string;
  id: string;
  date: string;
  title: string;
  link: string;
  content: string;
  imageSrc?: string;
  imageDesc?: string;
  description?: string;
  githublink?: string;
};

export const Detail = () => {
  const { category, id } = useParams();

  const getPostFromCategory = (category: string | undefined): PostData[] => {
    switch (category) {
      case "tech-notes":
        return techNotes;
      case "thoughts":
        return thoughts;
      case "deepdives":
        return deepdives;
      case "portfolio":
        return portfolio;
      default:
        return [];
    }
  };
  const postList = getPostFromCategory(category);
  const post = postList.find((item) => item.id === id);

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }
  const { title, author, authorProfile, date, content } = post;

  return (
    <main className={styles.postDetailContainer}>
      <h1 className={styles.postTitle}>{title}</h1>

      {/* 작성자, 날짜, 좋아요 */}
      <div className={styles.postMeta}>
        <div className={styles.authorInfo}>
          <img
            src={authorProfile}
            alt={author}
            className={styles.authorAvatar}
          />
          <div>
            <span className={styles.authorName}>{author}</span>
            <span className={styles.postDate}>{date}</span>
            {/* 예시 날짜 형식 Today at 11:37 AM */}
          </div>
        </div>
        <p className={styles.postLikeCount}>
          {/* <FaRegHeart color="red" /> */}
          <FaHeart color="red" />
          <span>42</span>
        </p>
      </div>

      {/* 글 내용 */}
      <article
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* feedback box */}
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
