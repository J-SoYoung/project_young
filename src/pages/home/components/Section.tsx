import { Link } from "react-router-dom";
import styles from "../styles/section.module.css";

import { ListsDeepDive, ListsNote, ListsPortfolio } from "../../../shared/components";
import { deepdives, portfolio, techNotes, thoughts } from "../exampleData";

type Props = {
  title: string;
  moreToLink: string;
  description: string;
};

export const Section = ({ title, moreToLink, description }: Props) => {
  const renderPosts = () => {
    switch (title) {
      case "Tech Notes":
        return <ListsNote posts={techNotes} />;
      case "Thoughts":
        return <ListsNote posts={thoughts} />;
      case "Deep Dives":
        return <ListsDeepDive posts={deepdives} />;
      case "Portfolio":
        return <ListsPortfolio posts={portfolio} />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>
          <span>{title}</span>
          <Link to={moreToLink}>모두 보기</Link>
        </h2>
        <p>{description}</p>
      </div>
      {renderPosts()}
    </section>
  );
};
