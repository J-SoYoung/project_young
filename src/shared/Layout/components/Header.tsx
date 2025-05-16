import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { PostTags } from "./PostTags";
import { useDeviceType } from "../../hooks/useDeviceType";
import { MainCategories } from "./MainCategories";

export const Header = () => {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to={"/home"}>PROJECT YOUNG</Link>
      </h1>
      <PostTags />
      {(isTablet || isMobile) && <MainCategories />}
    </header>
  );
};
