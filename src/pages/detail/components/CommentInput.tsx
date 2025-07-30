import { useState } from "react";
import styles from "../styles/commentInput.module.css";

type Comment = {
  author: string;
  content: string;
  createdAt: string;
  isOwner: boolean;
};
export const CommentInput = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;
    const newComment: Comment = {
      author: "thdud",
      content: comment,
      createdAt: new Date().toLocaleString(),
      isOwner: true
    };
    setComment("");
    console.log(newComment);
  };

  return (
    <section className={styles.form}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력해주세요"
      />
      <button onClick={handleSubmit}>등록</button>
    </section>
  );
};
