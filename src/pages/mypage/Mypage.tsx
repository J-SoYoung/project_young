import { useEffect, useState } from "react";

import { FcComments, FcLike, FcRules } from "react-icons/fc";

import styles from "./mypage.module.css";
import { useAuth } from "../../shared/hooks/useAuth";
import { MypageActiveListType } from "../../shared/types/posts";
import { getAllComments, getAllPosts } from "../../shared/apis/posts";
import { ActLists } from "./components/ActLists";
import { ActBoard } from "./components/ActBoard";
import { useNavigate, useParams } from "react-router-dom";
import { EditProfileModal } from "./components/EditProfileModal";

export type Panel = "posts" | "comments" | "likes" | null;
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
  const { userId } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();

  const [isEditProfile, setIsEditProfile] = useState(false);
  const [myPosts, setMyPosts] = useState<MypageActiveListType[]>([]);
  const [myComments, setMyComments] = useState<MypageActiveListType[]>([]);
  const [myLikes] = useState<MypageActiveListType[]>(likePosts); // TODO 좋아요 미구현
  const [activeType, setActiveType] = useState<Panel>("posts");

  // TODO - like 개발 후 useEffect 하나로 묶기, 데이터 각각요청중
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
        id: c.postId || "",
        title: c.comment, // 댓글내용
        subTitle: c.postTitle, // 댓글 달린 포스트 제목
        createdAt: c.createdAt
      }));
      setMyComments(items);
    };
    fetchMyComments();
  }, [profile?.userId]);

  const handleClickPost = (id: string) => {
    navigate(`/detail/${id}`);
  };

  if (!userId) {
    return <div>로그인 후 이용가능합니다 </div>;
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
              onClick={() => setIsEditProfile(true)}
            >
              Edit Profile
            </button>
          </div>
        </section>
      </div>
      {isEditProfile && profile && (
        <EditProfileModal
          profile={profile}
          onClose={() => setIsEditProfile(false)}
        />
      )}

      {/* Activity */}
      <ActBoard
        posts={myPosts}
        likes={myLikes}
        comments={myComments}
        setActiveType={setActiveType}
      />

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
