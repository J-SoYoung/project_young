import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to={"/home"}>PROJECT YOUNG</Link>
      </h1>
      <nav className={styles.nav}>
        {[
          "GAMY",
          "EMPOWER",
          "STRENGTH DESIGN 201",
          "GAMY",
          "INSPIRE",
          "STRENGTH DESIGN 301"
        ].map((tag, idx) => (
          <button key={idx} className={styles.tagButton}>
            {tag}
          </button>
        ))}
      </nav>
    </header>
  );
};
