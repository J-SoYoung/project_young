import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { Categories } from "./Categories";
import { MenubarTablet } from "./MenubarTablet";
import { useDeviceType } from "../hooks/useDeviceType";

export const Header = () => {
  const { isDesktop } = useDeviceType();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to={"/home"}>PROJECT YOUNG</Link>
      </h1>
      <Categories />
      {!isDesktop && <MenubarTablet />}
    </header>
  );
};
