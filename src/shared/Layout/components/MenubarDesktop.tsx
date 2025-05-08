import { Link } from "react-router-dom";
import me from "../../../assets/m.jpg";
import styles from "../styles/menubarDesktop.module.css";
import { SearchBar } from "./SearchBar";

export const MenubarDesktop = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.imageBox}>
        <img src={me} alt="so-young image" className={styles.sidebarImage} />
      </div>
      <SearchBar />

      <nav className={styles.menuSection}>
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
    </aside>
  );
};
