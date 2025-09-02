import { FcComments, FcLike, FcRules } from "react-icons/fc";
import styles from "../styles/actBoard.module.css";
import { useAuth } from "../../../shared/hooks/useAuth";
import { Panel } from "../Mypage";
import { MypageActiveListType } from "../../../shared/types/posts";

type ActBoardPropsTypes = {
  posts: MypageActiveListType[];
  likes: MypageActiveListType[];
  comments: MypageActiveListType[];
  setActiveType: React.Dispatch<React.SetStateAction<Panel>>;
};
//
export const ActBoard = ({
  posts,
  likes,
  comments,
  setActiveType
}: ActBoardPropsTypes) => {
  const { profile } = useAuth();
  const isOwner = profile?.role === "owner";

  const handleClickActivity = (type: "posts" | "comments" | "likes") => {
    if (type === "posts" && !isOwner) return;
    setActiveType(type);
  };

  return (
    <section aria-label="내 활동 요약">
      <div className={styles.activity}>
        <button type="button" onClick={() => handleClickActivity("posts")}>
          <p className={styles.subtitle}>Posts</p>
          <span className={styles.counter}>
            <FcRules size={20} />
            {posts.length}
          </span>
        </button>
        <button type="button" onClick={() => handleClickActivity("comments")}>
          <p className={styles.subtitle}>Comments</p>
          <span className={styles.counter}>
            <FcComments size={20} />
            {comments.length}
          </span>
        </button>
        <button type="button" onClick={() => handleClickActivity("likes")}>
          <p className={styles.subtitle}>Likes</p>

          <span className={styles.counter}>
            <FcLike size={20} />
            <span>{likes.length}</span>
          </span>
        </button>
      </div>
    </section>
  );
};
