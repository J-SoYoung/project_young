import { useState } from "react";
import styles from "../styles/commentInput.module.css";

import { Comment } from "../../../shared/types/posts";
import { addComment } from "../../../shared/apis/posts";
import { useAuth } from "../../../shared/contexts/AauthProvider";

export const CommentInput = ({ postId }: { postId: string | undefined }) => {
  const { profile } = useAuth();
  console.log(profile)
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    const newComment: Comment = {
      author: "thdud",
      content: comment,
      createdAt: new Date().toISOString(),
      isOwner: true
    };
    setComment("");
    try {
      if (postId) {
        await addComment({ postId, newComment });
      }
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
      return;
    }
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
