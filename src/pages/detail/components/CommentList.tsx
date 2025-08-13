import { deleteComment } from "../../../shared/apis/posts";
import { useAuth } from "../../../shared/contexts/AauthProvider";
import { CommentType } from "../../../shared/types/posts";
import styles from "../styles/commentList.module.css";

type CommentListProps = {
  postId: string;
  comments: CommentType[];
  setCommentLists: React.Dispatch<React.SetStateAction<[] | CommentType[]>>;
};

export const CommentList = ({
  postId,
  comments,
  setCommentLists
}: CommentListProps) => {
  const { profile } = useAuth();
  const handleDelete = (id: string) => {
    if (confirm("댓글을 정말 삭제하시겠습니까?")) {
      deleteComment(postId, id);
      setCommentLists((prev) => prev.filter((comment) => comment.id !== id));
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
              <p className={styles.content}>{c.content}</p>
              {profile?.userId === c.userId && (
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(c.id)}
                >
                  삭제
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
