import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiFillSignature } from "react-icons/ai";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

import styles from "./styles/header.module.css";
import { useDeviceType } from "../hooks";
import { MenuButton } from "./Menubutton";
import { MenuModal } from "./MenuModal";

export const Header = () => {
  const { isTablet, isDesktop } = useDeviceType();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">DEV.SoYoung</Link>
        </div>
        <nav className={styles.nav}>
          {isTablet || isDesktop ? (
            <MenuButton menuType={"header"} />
          ) : (
            <AiOutlineMenu
              size={25}
              className={styles.icons}
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          <Link to={"https://github.com/J-SoYoung"} target="_blank">
            <IoLogoGithub size={25} className={styles.icons} />
          </Link>

          {isDarkMode ? (
            <MdOutlineWbSunny
              size={25}
              onClick={() => setIsDarkMode(false)}
              className={styles.icons}
            />
          ) : (
            <MdDarkMode
              size={25}
              onClick={() => setIsDarkMode(true)}
              className={styles.icons}
            />
          )}

          <Link to={"/write"}>
            <AiFillSignature size={27} className={styles.icons} />
          </Link>
        </nav>
      </header>
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
