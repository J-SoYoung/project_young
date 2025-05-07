import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import styles from "../styles/topNavigate.module.css";

export const TopNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname); // 현재 경로를 확인할 수 있습니다.

  return (
    <nav className={styles.nav}>
      <button className={styles.navigateBtn}>
        <FaChevronLeft />
      </button>
      <span className={styles.curPageName}>{location.pathname}</span>
    </nav>
  );
};
