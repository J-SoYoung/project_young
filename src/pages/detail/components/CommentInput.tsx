import { useState } from "react";
import styles from "../styles/commentInput.module.css";

import { CommentType } from "../../../shared/types/posts";
import { addComment } from "../../../shared/apis/posts";
import { getTodayDate } from "../../../shared/utils/getTodayDate";
import { useAuth } from "../../../shared/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "../../../shared/query/keys";

type CommentInputProps = {
  postId: string;
};

export const CommentInput = ({ postId }: CommentInputProps) => {
  const { profile } = useAuth();
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createComment, isPending } = useMutation({
    mutationFn: async (payload: CommentType) => {
      return addComment(payload);
    },
    onError: (err) => {
      alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
      console.error("댓글 등록 실패:", err);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.posts.detail(postId) });
    }
  });

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    const payload: CommentType = {
      id: "",
      author: profile?.username || "사용자",
      userId: profile?.userId || "",
      comment: comment,
      createdAt: getTodayDate(),
      postId: postId as string
    };
    setComment("");
    createComment(payload);
  };

  return (
    <section className={styles.form}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력해주세요"
      />
      <button onClick={handleSubmit}>{isPending ? "등록중..." : "등록"}</button>
    </section>
  );
};
