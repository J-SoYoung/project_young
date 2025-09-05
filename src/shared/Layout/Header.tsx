import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiFillSignature } from "react-icons/ai";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

import styles from "./styles/header.module.css";
import { useDeviceType } from "../hooks";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../service/auth";

import { MenuModal } from "./MenuModal";
import { MenuButtons } from "./MenuButtons";
import { LoginModal } from "./LoginModal";
import { paths } from "../../routers/paths";

export const Header = () => {
  const { profile, authUser } = useAuth();
  const isOwner = profile?.userId === import.meta.env.VITE_BLOG_OWNER_UID;

  const { isTablet, isDesktop } = useDeviceType();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  const handleLogout = async () => {
    await logout();
    alert("로그아웃 되었습니다.");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={paths.home()}>DEV.SoYoung</Link>
        </div>
        <nav className={styles.nav}>
          {isTablet || isDesktop ? (
            <MenuButtons menuType={"header"} />
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

          {/* <Login /> */}
          {authUser ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <button onClick={() => setIsLoginOpen(true)}>로그인</button>
          )}
          {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}

          {isOwner && (
            <Link to={paths.write()}>
              <AiFillSignature size={27} className={styles.icons} />
            </Link>
          )}
        </nav>
      </header>
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
