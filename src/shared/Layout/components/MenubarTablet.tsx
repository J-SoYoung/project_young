import { Link } from "react-router-dom";
import styles from "../styles/menubarTablet.module.css";
import { SearchBar } from "./SearchBar";

export const MenubarTablet = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.menuSection}>
        <Link to={"/list/memo"}>MEMO</Link>
        <Link to={"/list/achiving"}>ACHIVING</Link>
        <Link to={"/list/study"}>STUDY</Link>
        <Link to={"/list/book"}>BOOK</Link>
      </nav>
      <SearchBar />
    </aside>
  );
};
