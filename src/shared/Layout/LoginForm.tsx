import { logout, signInWithGoogle } from "../service/auth";
import styles from "./styles/loginForm.module.css";
import { useAuth } from "../service/AauthProvider";

export const LoginForm = () => {
  const { user } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      const userData = await signInWithGoogle();
      if (userData) {
        alert(`환영합니다♥ ${userData.displayName}님!`);
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
      {user ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleGoogleLogin}>로그인</button>
      )}
    </div>
  );
};
