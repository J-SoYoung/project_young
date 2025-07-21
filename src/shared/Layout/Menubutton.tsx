import { Link } from "react-router-dom";
import { FcAnswers, FcIdea, FcCamera, FcComments } from "react-icons/fc";
import styles from "./styles/menubutton.module.css";

export const MenuButton = () => {
  return (
    <div className={styles.menuButton}>
      <Link to={"/menu/tech-notes"}>
        <FcAnswers size={20} />
        <span>TechNote</span>
      </Link>
      <Link to={"/menu/thoughts"}>
        <FcIdea size={20} />
        <span>Thought</span>
      </Link>
      <Link to={"/menu/deepdives"}>
        <FcComments size={20} />
        <span>DeepDives</span>
      </Link>
      <Link to={"/menu/portfolio"}>
        <FcCamera size={20} />
        <span>Portfolio</span>
      </Link>
    </div>
  );
};
