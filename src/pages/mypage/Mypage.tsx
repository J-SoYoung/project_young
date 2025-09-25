import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FcComments, FcLike, FcRules } from "react-icons/fc";

import styles from "./mypage.module.css";
import { ActLists } from "./components/ActLists";
import { ActBoard } from "./components/ActBoard";
import { EditProfileModal } from "./components/EditProfileModal";

import { keys } from "../../shared/query/keys";
import { useAuth } from "../../shared/hooks/useAuth";
import { MypageActiveListType } from "../../shared/types/posts";
import { getAllMyComments, getAllPosts } from "../../shared/apis/posts";
import { paths } from "../../routers/paths";

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
  const { userId } = useLoaderData();
  const navigate = useNavigate();
  const { profile } = useAuth();

  const [isEditProfile, setIsEditProfile] = useState(false);
  const [myLikes] = useState<MypageActiveListType[]>(likePosts); // TODO 좋아요 미구현
  const [activeType, setActiveType] = useState<Panel>("posts");

  const {
    data: allMyPosts,
    isLoading: allMyPostsLoading
    // isError : allMyPostsError,
  } = useQuery({
    queryKey: keys.posts.allMyPosts(),
    queryFn: () => getAllPosts(),
    select: (allMyPosts) =>
      allMyPosts.map((p) => ({
        id: p.id || "",
        title: p.title,
        subTitle: p.category,
        createdAt: p.createdAt
      }))
  });

  const {
    data: allMyComments,
    isLoading: allMyCommentsLoading
    // isError : allMyCommentsError,
  } = useQuery({
    queryKey: keys.comments.allMyComments(userId),
    queryFn: () => getAllMyComments(userId),
    select: (allMyPosts) =>
      allMyPosts.map((c) => ({
        id: c.postId || "",
        title: c.comment, // 댓글내용
        subTitle: c.postTitle, // 댓글 달린 포스트 제목
        createdAt: c.createdAt
      }))
  });

  const handleClickPost = (id: string) => {
    navigate(paths.detail({ id }));
  };

  if (allMyPostsLoading || allMyCommentsLoading) return <div>로딩중...</div>;

  if (!userId) {
    return <div>로그인 후 이용가능합니다 </div>;
  }

  const map = {
    posts: {
      title: "My Posts",
      emptyText: "작성한 포스트가 없습니다.",
      lists: allMyPosts || [],
      icon: <FcRules size={20} />
    },
    comments: {
      title: "My Comments",
      emptyText: "작성한 댓글이 없습니다.",
      lists: allMyComments || [],
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
        posts={allMyPosts || []}
        likes={myLikes}
        comments={allMyComments || []}
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
