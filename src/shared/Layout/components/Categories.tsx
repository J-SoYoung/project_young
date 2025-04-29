import { Link } from "react-router-dom";
import styles from "../styles/categories.module.css";

export const Categories = () => {
  return (
    <nav className={styles.categories}>
      <h3 className={styles.sectionTitle}>Menu</h3>
      <ul className={styles.menuList}>
        <li>
          <Link to={"/list/memo"}>MEMO</Link>
        </li>
        <li>
          <Link to={"/list/achiving"}>ACHIVING</Link>
        </li>
        <li>
          <Link to={"/list/study"}>STUDY</Link>
        </li>
        <li>
          <Link to={"/list/book"}>BOOK</Link>
        </li>
      </ul>
    </nav>
  );
};
