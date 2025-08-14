import { Link } from "react-router-dom";
import { FcAnswers, FcIdea, FcCamera, FcComments } from "react-icons/fc";
import styles from "./styles/menuButton.module.css";

type MenuButtonProps = {
  menuType: "header" | "modal";
  onClose?: () => void; // Optional for modal
};

export const MenuButtons = ({ menuType, onClose }: MenuButtonProps) => {
  return (
    <nav
      className={menuType === "modal" ? styles.menuModal : styles.menuButton}
    >
      <Link to={"/menu/tech-notes"} onClick={onClose}>
        <FcAnswers size={20} />
        <span>TechNote</span>
      </Link>
      <Link to={"/menu/thoughts"} onClick={onClose}>
        <FcIdea size={20} />
        <span>Thought</span>
      </Link>
      <Link to={"/menu/deepdives"} onClick={onClose}>
        <FcComments size={20} />
        <span>DeepDives</span>
      </Link>
      <Link to={"/menu/portfolio"} onClick={onClose}>
        <FcCamera size={20} />
        <span>Portfolio</span>
      </Link>
    </nav>
  );
};
