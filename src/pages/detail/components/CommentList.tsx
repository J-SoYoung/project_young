import styles from "../styles/commentList.module.css";

type Comments = {
  comments: {
    id: string;
    author: string;
    content: string;
    createdAt: string;
    isOwner: boolean;
  }[];
};

export const CommentList = ({ comments }: Comments) => {
  const handleDelete = (id: string) => {
    if (confirm("댓글을 정말 삭제하시겠습니까?")) {
      console.log("id", id);
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
          <div>
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
