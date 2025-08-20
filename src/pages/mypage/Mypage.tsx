import { useAuth } from "../../shared/hooks/useAuth";
import styles from "./mypage.module.css";

const myPosts = [];
const likePosts = [];
const activity = [];

export const Mypage = () => {
  const { profile, loading } = useAuth();
  const isOwner = profile?.role === "owner";

  const onEditProfile = () => {};

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
    </main>
  );
};
