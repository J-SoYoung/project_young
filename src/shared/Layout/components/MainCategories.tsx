import { Link } from "react-router-dom";
import me from "../../../assets/m.jpg";

import styles from "../styles/mainCategories.module.css";
import { SearchBar } from "./SearchBar";
import { useDeviceType } from "../../hooks";

export const MainCategories = () => {
  const { isDesktop } = useDeviceType();

  if (isDesktop) {
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
  }
  return (
    <aside className={styles.tabletAside}>
      <SearchBar />
      <nav className={styles.tabletMenuSection}>
        <Link to={"/list/memo"}>MEMO</Link>
        <Link to={"/list/achiving"}>ACHIVING</Link>
        <Link to={"/list/study"}>STUDY</Link>
        <Link to={"/list/book"}>BOOK</Link>
      </nav>
    </aside>
  );
};
