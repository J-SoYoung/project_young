import { Link } from "react-router-dom";
import styles from "../styles/categories.module.css";

export const Categories = () => {
  return (
    <nav className={styles.nav}>
      {["GAMY", "EMPOWER", "STRENGTH", "301", "INSPIRE", "DESIGN"].map(
        (tag, idx) => (
          <Link to={`/categories/${tag}`} key={idx} className={styles.tagButton}>
            {tag}
          </Link>
        )
      )}
    </nav>
  );
};
