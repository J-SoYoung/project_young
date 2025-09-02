import { Link } from "react-router-dom";
import { FcUnlock } from "react-icons/fc"; //Flat Color Icons

import styles from "./styles/menuButton.module.css";
import { CATEGORIES, CATEGORY_META } from "../types/category";
import { useAuth } from "../hooks/useAuth";
import { paths } from "../../routers/paths";

type MenuButtonProps = {
  menuType: "header" | "modal";
  onClose?: () => void; // Optional for modal
};

export const MenuButtons = ({ menuType, onClose }: MenuButtonProps) => {
  const { profile } = useAuth();
  return (
    <nav
      className={menuType === "modal" ? styles.menuModal : styles.menuButton}
    >
      {CATEGORIES.map((category) => {
        const Icon = CATEGORY_META[category].icon; //컴포넌트 함수를
        return (
          <Link to={paths.menu({ category: category })} onClick={onClose}>
            <Icon size={20} />
            <span>{CATEGORY_META[category].label}</span>
          </Link>
        );
      })}
      {profile && (
        <Link to={paths.mypage({ userId: profile.userId })} onClick={onClose}>
          <FcUnlock size={20} />
          <span>MyPage</span>
        </Link>
      )}
    </nav>
  );
};
