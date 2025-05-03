import { Outlet } from "react-router-dom";
import { Footer, Header, MenubarDesktop, MenubarTablet } from "./components";

import styles from "./globalLayout.module.css";
import { useDeviceType } from "./hooks/useDeviceType";

export const GlobalLayout = () => {
  const { isTablet, isDesktop } = useDeviceType();

  if (isDesktop) {
    return (
      <div className={`${styles.container} ${styles.desktop}`}>
        <Header />
        <div className={styles.main}>
          <div className={styles.outletWrapper}>
            <Outlet />
          </div>
          <div className={styles.sidebarWrapper}>
            <MenubarDesktop />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div
        className={`${styles.container} ${styles.tablet}`}
      >
        <Header />
        <div className={`${styles.main} ${styles.subContainer}`}>
          <MenubarTablet />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.mobile}`}>
      <Header />
      <div className={`${styles.main} ${styles.subContainer}`}>
        <MenubarTablet />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
