import { Outlet } from "react-router-dom";
import { Footer, Header, MainCategories, TopNavigate } from "./components";

import styles from "./globalLayout.module.css";
import { useDeviceType } from "../hooks/useDeviceType";

export const GlobalLayout = () => {
  const { isTablet, isDesktop } = useDeviceType();

  if (isDesktop) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <div className={styles.outletWrapper}>
            <TopNavigate />
            <Outlet />
          </div>
          <div className={styles.sidebarWrapper}>
            <MainCategories />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.tabletMain}>
          <TopNavigate />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mobiletMain}>
        <TopNavigate />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
