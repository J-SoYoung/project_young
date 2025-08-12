import { logout, signInWithGoogle } from "../service/auth";
import styles from "./styles/loginForm.module.css";
import { useAuth } from "../contexts/AauthProvider";

export const LoginForm = () => {
  const { profile } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      const userProfile = await signInWithGoogle();
      if (userProfile) {
        alert(`환영합니다♥ ${userProfile.username}님!`);
      }
    } catch (error) {
      console.log(error);
      alert("로그인 오류입니다.");
    }
  };

  const handleLogout = async () => {
    await logout();
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className={styles.login}>
      {profile ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleGoogleLogin}>로그인</button>
      )}
    </div>
  );
};
