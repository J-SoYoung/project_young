import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiFillSignature } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import {
  MdDarkMode
  // MdOutlineDarkMode,
  // MdSunny,
  // MdOutlineWbSunny
} from "react-icons/md";

import styles from "./styles/header.module.css";
import { useDeviceType } from "../hooks";
import { MenuButton } from "./Menubutton";

export const Header = () => {
  const navigate = useNavigate();
  const { isTablet, isDesktop } = useDeviceType();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">DEV.SoYoung</Link>
      </div>
      <nav className={styles.nav}>
        {isTablet || isDesktop ? (
          <MenuButton />
        ) : (
          <AiOutlineMenu size={25} className={styles.icons} />
        )}
        <IoLogoGithub size={25} className={styles.icons} />
        <MdDarkMode size={25} className={styles.icons} />
        <AiFillSignature
          size={27}
          onClick={() => navigate(`/write`)}
          className={styles.icons}
        />
      </nav>
    </header>
  );
};
