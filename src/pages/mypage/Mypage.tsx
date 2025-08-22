import { useEffect, useState } from "react";

import { FcComments, FcLike, FcRules } from "react-icons/fc";

import styles from "./mypage.module.css";
import { useAuth } from "../../shared/hooks/useAuth";
import { MypageActiveListType } from "../../shared/types/posts";
import { getAllComments, getAllPosts } from "../../shared/apis/posts";
import { ActLists } from "./components/ActLists";
// import { useNavigate } from "react-router-dom";

type Panel = "posts" | "comments" | "likes" | null;
const likePosts: MypageActiveListType[] = [
  {
    id: "aa11",
    title: "좋아요 포스트 제목11",
    createdAt: "2025-08-22"
  },
  {
    id: "aa22",
    title: "좋아요 포스트 제목22",
    createdAt: "2025-08-24"
  }
];

// 좋아요 한 게시글id / title, 좋아요 한 날짜
export const Mypage = () => {
  // const navigate = useNavigate();
  const { profile, loading } = useAuth();
  const isOwner = profile?.role === "owner";

  const [myPosts, setMyPosts] = useState<MypageActiveListType[]>([]);
  const [myComments, setMyComments] = useState<MypageActiveListType[]>([]);
  const [myLikes] = useState<MypageActiveListType[]>(likePosts); // TODO 좋아요 미구현
  const [activeType, setActiveType] = useState<Panel>("posts");

  useEffect(() => {
    const fetchAllPosts = async () => {
      const allPosts = await getAllPosts();
      if (!allPosts) setMyPosts([]);
      const items = allPosts.map((p) => ({
        id: p.id || "",
        title: p.title,
        subTitle: p.category,
        createdAt: p.createdAt
      }));
      setMyPosts(items);
    };
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const fetchMyComments = async () => {
      if (!profile?.userId) return;
      const allComments = await getAllComments(profile?.userId);
      if (!allComments) setMyComments([]);
      const items = allComments.map((c) => ({
        id: c.id || "",
        title: c.comment, // 댓글내용
        subTitle: c.postTitle, // 댓글 달린 포스트 제목
        createdAt: c.createdAt
      }));
      setMyComments(items);
    };
    fetchMyComments();
  }, [profile?.userId]);

  const onEditProfile = () => {};

  const handleClickPost = (id: string) => {
    console.log("페이지이동", id);
    // navigate(`/post/${id}`);
    // TODO-URL변경, category이동... 확인 현재 /detail/category/postId임
  };

  const handleClickActivity = (type: "posts" | "comments" | "likes") => {
    if (type === "posts" && !isOwner) return;
    setActiveType(type);
  };

  if (loading) {
    return (
      <main>
        <h1>MyPage</h1>
        <div> 로딩중 </div>
      </main>
    );
  }

  const map = {
    posts: {
      title: "My Posts",
      emptyText: "작성한 포스트가 없습니다.",
      lists: myPosts,
      icon: <FcRules size={20} />
    },
    comments: {
      title: "My Comments",
      emptyText: "작성한 댓글이 없습니다.",
      lists: myComments,
      icon: <FcComments size={20} />
    },
    likes: {
      title: "My Likes",
      emptyText: "좋아요한 글이 없습니다.",
      lists: myLikes,
      icon: <FcLike size={20} />
    }
  } as const;

  return (
    <main>
      <h1>MyPage</h1>
      {/* profile */}
      <div className={styles.card}>
        <section className={styles.profileSection}>
          <img
            className={styles.profileImage}
            src={
              profile?.profileImage ||
              "https://placehold.co/120x120?text=profile"
            }
            alt={`${profile?.username} profile`}
          />
          <div>
            <div className={styles.profileMeta}>
              <strong className={styles.name}>{profile?.username}</strong>
              <p className={styles.bio}>
                {profile?.biography || "소개글이 없습니다."}
              </p>
            </div>

            <button
              className={styles.profileEditButton}
              onClick={onEditProfile}
            >
              Edit Profile
            </button>
          </div>
        </section>
      </div>

      {/* Activity */}
      <section aria-label="내 활동 요약">
        <div className={styles.activity}>
          <button
            type="button"
            aria-controls="mypage-list"
            disabled={!isOwner}
            title={!isOwner ? "관리자만 확인 가능합니다." : undefined}
            onClick={() => handleClickActivity("posts")}
          >
            <p className={styles.subtitle}>Posts</p>
            <span className={styles.counter}>
              <FcRules size={20} />
              {myPosts.length}
            </span>
          </button>
          <button
            type="button"
            aria-controls="mypage-list"
            onClick={() => handleClickActivity("comments")}
          >
            <p className={styles.subtitle}>Comments</p>
            <span className={styles.counter}>
              <FcComments size={20} />
              {myComments.length}
            </span>
          </button>
          <button
            type="button"
            aria-controls="mypage-list"
            onClick={() => handleClickActivity("likes")}
          >
            <p className={styles.subtitle}>Likes</p>
            <span className={styles.counter}>
              <FcLike size={20} />
              <span>{myLikes.length}</span>
            </span>
          </button>
        </div>
      </section>

      {/* My Activity Listt */}
      {activeType && (
        <ActLists
          title={map[activeType].title}
          emptyText={map[activeType].emptyText}
          lists={map[activeType].lists}
          handleClickPost={handleClickPost}
          icon={map[activeType].icon}
        />
      )}
    </main>
  );
};
