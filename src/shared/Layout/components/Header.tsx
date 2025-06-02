import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

import { PostTags } from "./PostTags";
import { useDeviceType } from "../../hooks/useDeviceType";
import { MainCategories } from "./MainCategories";
import { WriteButton } from "../../components/writeButton/WriteButton";

export const Header = () => {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <Link to={"/home"}>PROJECT YOUNG</Link>
        </h1>
        <WriteButton />
      </div>
      <PostTags />
      {(isTablet || isMobile) && <MainCategories />}
    </header>
  );
};
