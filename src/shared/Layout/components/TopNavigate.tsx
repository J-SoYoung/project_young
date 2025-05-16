import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import styles from "../styles/topNavigate.module.css";

export const TopNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageNamed = location.pathname.split("/").pop();

  console.log(pageNamed);

  return (
    <nav className={styles.nav}>
      <button className={styles.navigateBtn}>
        <FaChevronLeft />
      </button>
      <span className={styles.curPageName}>{pageNamed}</span>
    </nav>
  );
};
