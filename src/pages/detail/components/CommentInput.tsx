import { useState } from "react";
import styles from "../styles/commentInput.module.css";

import { CommentType } from "../../../shared/types/posts";
import { addComment } from "../../../shared/apis/posts";
import { getTodayDate } from "../../../shared/utils/getTodayDate";
import { useAuth } from "../../../shared/hooks/useAuth";

type CommentInputProps = {
  postId: string | undefined;
  // setCommentLists: React.Dispatch<React.SetStateAction<[] | CommentType[]>>;
};

export const CommentInput = ({
  postId,
  // setCommentLists
}: CommentInputProps) => {
  const { profile } = useAuth();
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    const newComment: CommentType = {
      id: "",
      author: profile?.username || "사용자",
      userId: profile?.userId || "",
      comment: comment,
      createdAt: getTodayDate(),
      postId: postId as string
    };
    setComment("");
    // setCommentLists((prev) => [newComment, ...prev]);
    try {
      if (postId) {
        await addComment(newComment);
      }
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
      return;
    }
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
