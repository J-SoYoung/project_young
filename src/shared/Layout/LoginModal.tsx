import { useEffect, useRef } from "react";
import styles from "./styles/menuModal.module.css";
import { signInWithGoogle } from "../service/auth";

export const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleGoogleLogin = async () => {
    try {
      const userProfile = await signInWithGoogle();
      if (userProfile) {
        alert(`환영합니다♥ ${userProfile.username}님!`);
      }
      onClose();
    } catch (error) {
      console.log(error);
      alert("로그인 오류입니다.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        <div className={styles.loginButtons}>
          <button onClick={handleGoogleLogin}>Google 로그인</button>
          <button onClick={() => alert("준비중입니다")}>Email 로그인</button>
        </div>
      </div>
    </div>
  );
};
