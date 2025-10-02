import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../../../shared/apis/posts";
import { useAuth } from "../../../shared/hooks/useAuth";

import { CommentType } from "../../../shared/types/posts";
import styles from "../styles/commentList.module.css";
import { keys } from "../../../shared/query/keys";

type CommentListProps = {
  postId: string;
  comments: CommentType[];
};

export const CommentList = ({ postId, comments }: CommentListProps) => {
  const { profile } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: deleteCommentMutate, isPending } = useMutation({
    mutationFn: async (commentId: string) => {
      return deleteComment(postId, commentId);
    },
    onError: (err) => {
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
      console.error("댓글 삭제 실패:", err);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.posts.detail(postId) });
    }
  });

  const handleDelete = (id: string) => {
    if (!id) return;
    if (confirm("댓글을 정말 삭제하시겠습니까?")) {
      deleteCommentMutate(id);
    }
  };

  return (
    <ul className={styles.commentList}>
      {comments.map((c) => {
        return (
          <li key={c.id} className={styles.commentItem}>
            <div className={styles.commentMeta}>
              <span className={styles.author}>{c.author}</span>
              <span className={styles.time}>{c.createdAt}</span>
            </div>
            <div className={styles.commentsBox}>
              <p className={styles.content}>{c.comment}</p>
              {profile?.userId === c.userId && (
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(c.id || "")}
                >
                  {isPending ? "삭제중..." : "삭제"}
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
