import { deleteComment } from "../../../shared/apis/posts";
import { Comment } from "../../../shared/types/posts";
import styles from "../styles/commentList.module.css";

type CommentListProps = {
  postId: string;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<[] | Comment[]>>;
};
export const CommentList = ({
  postId,
  comments,
  setComments
}: CommentListProps) => {
  const handleDelete = (id: string) => {
    if (confirm("댓글을 정말 삭제하시겠습니까?")) {
      console.log("id", id);
      deleteComment(postId, id);
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  return (
    <ul className={styles.commentList}>
      {comments.map((c) => (
        <li key={c.id} className={styles.commentItem}>
          <div className={styles.commentMeta}>
            <span className={styles.author}>{c.author}</span>
            <span className={styles.time}>{c.createdAt}</span>
          </div>
          <div className={styles.commentsBox}>
            <p className={styles.content}>{c.content}</p>
            {c.isOwner && (
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(c.id)}
              >
                삭제
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
