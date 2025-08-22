import { useEffect, useState } from "react";

import { FcComments, FcLike, FcRules } from "react-icons/fc";

import styles from "./mypage.module.css";
import { useAuth } from "../../shared/hooks/useAuth";
import { CommentType, Post } from "../../shared/types/posts";
import { getAllComments, getAllPosts } from "../../shared/apis/posts";

const likePosts = [];
// 좋아요 한 게시글id / title, 좋아요 한 날짜
const commentPosts = [];
// 댓글 단 게시글 id / title, 댓글 단 날짜, 댓글 내용

export const Mypage = () => {
  const { profile, loading } = useAuth();
  const isOwner = profile?.role === "owner";
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [myComments, setMyComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const allPosts = await getAllPosts();
      if (!allPosts) setMyPosts([]);
      setMyPosts(allPosts);
    };
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const fetchMyComments = async () => {
      if (!profile?.userId) return;
      const allComments = await getAllComments(profile?.userId);
      if (!allComments) setMyComments([]);
      setMyComments(allComments);
    };
    fetchMyComments();
  }, [profile?.userId]);

  const onEditProfile = () => {};
  const handleClickPost = (id: string) => {
    console.log("페이지이동", id);
  };
  const handleClickActivity = (type: string) => {
    console.log("activity-type", type);
  };

  if (loading) {
    return (
      <main>
        <h1>MyPage</h1>
        <div> 로딩중 </div>
      </main>
    );
  }

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
          <button type="button" onClick={() => handleClickActivity("posts")}>
            <p className={styles.subtitle}>Posts</p>
            <span className={styles.counter}>
              <FcRules size={20} />
              {myPosts.length}
            </span>
          </button>
          <button type="button" onClick={() => handleClickActivity("comments")}>
            <p className={styles.subtitle}>Comments</p>
            <span className={styles.counter}>
              <FcComments size={20} />
              {myComments.length}
            </span>
          </button>
          <button type="button" onClick={() => handleClickActivity("likes")}>
            <p className={styles.subtitle}>Likes</p>
            <span className={styles.counter}>
              <FcLike size={20} />
              <span>10</span>
            </span>
          </button>
        </div>
      </section>

      {/* My Activity Listt */}
      <div>
        <header className={styles.sectionHead}>My Posts</header>
        <ul className={styles.list}>
          {myPosts.length === 0 && (
            <li className={styles.empty}>작성한 글이 없습니다.</li>
          )}
          {myPosts.map((p) => (
            <li key={p.id}>
              <button
                className={styles.rowBtn}
                onClick={() => handleClickPost(p.id)}
                aria-label={`${p.title} 상세로 이동`}
              >
                <div className={styles.rowText}>
                  <span className={styles.rowCategory}>[ {p.category} ]</span>
                  <span className={styles.rowTitle}>{p.title}</span>
                  <time className={styles.rowDate}>{p.createdAt}</time>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* My Activity Comment */}
      <div>
        <header className={styles.sectionHead}>My Comments</header>
        <ul className={styles.list}>
          {myComments.length === 0 && (
            <li className={styles.empty}>작성한 댓글이 없습니다.</li>
          )}
          {myComments.map((p) => (
            <li key={p.id}>
              <button
                className={styles.rowBtn}
                onClick={() => handleClickPost(p.id)}
                aria-label={`${p.title} 상세로 이동`}
              >
                <div className={styles.rowText}>
                  <span className={styles.rowTitle}>{p.title}</span>
                  <time className={styles.rowDate}>{p.createdAt}</time>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
