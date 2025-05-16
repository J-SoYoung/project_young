import { Link } from "react-router-dom";
import styles from "../styles/postTags.module.css";

export const PostTags = () => {
  return (
    <nav className={styles.nav}>
      {["TypeScript", "JavaScript", "REACT", "PWA", "BLOG", "DESIGN"].map(
        (keyword, idx) => (
          <Link
            to={`/postTags/${keyword}`}
            key={idx}
            className={styles.tagButton}
          >
            {keyword}
          </Link>
        )
      )}
    </nav>
  );
};
