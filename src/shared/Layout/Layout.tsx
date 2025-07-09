import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
import { PiNotePencilDuotone } from "react-icons/pi";

import styles from "./layout.module.css";
import { ScrollToTop } from "../components";

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">DEV.SoYoung</Link>
        </div>
        <nav className={styles.nav}>
          <PiNotePencilDuotone
            size={27}
            onClick={() => navigate(`/write`)}
            className={styles.icons}
          />
          <AiOutlineMenu size={25} className={styles.icons} />
          <IoLogoGithub size={25} className={styles.icons} />
          {/* <MdOutlineDarkMode size={25} className={styles.icons} /> */}
          <MdDarkMode size={25} className={styles.icons} />
        </nav>
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <div>
          <a href="#">RSS feed</a> ·{" "}
          <a href="https://github.com" target="_blank">
            GitHub
          </a>{" "}
          · <a href="#">Buy me a coffee</a>
        </div>
        <p>© 2025 DEV.SoYoung. All rights reserved.</p>
      </footer>
    </>
  );
};
