import { Link } from "react-router-dom";
import { FcUnlock } from "react-icons/fc"; //Flat Color Icons

import styles from "./styles/menuButton.module.css";
import { CATEGORIES, CATEGORY_META } from "../types/category";

type MenuButtonProps = {
  menuType: "header" | "modal";
  onClose?: () => void; // Optional for modal
  userId: string | null;
};

export const MenuButtons = ({ menuType, onClose, userId }: MenuButtonProps) => {
  return (
    <nav
      className={menuType === "modal" ? styles.menuModal : styles.menuButton}
    >
      {CATEGORIES.map((category) => {
        const Icon = CATEGORY_META[category].icon; //컴포넌트 함수를
        return (
          <Link to={`/menu/${category}`} onClick={onClose}>
            <Icon size={20} />
            <span>{CATEGORY_META[category].label}</span>
          </Link>
        );
      })}
      {userId && (
        <Link to={`/mypage/${userId}`} onClick={onClose}>
          <FcUnlock size={20} />
          <span>MyPage</span>
        </Link>
      )}
    </nav>
  );
};
