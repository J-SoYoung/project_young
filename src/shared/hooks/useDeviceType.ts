import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [device, setDevice] = useState<
    "mobile" | "smallTablet" | "tablet" | "desktop"
  >(() => {
    const width = window.innerWidth;
    if (width <= 480) return "mobile";
    else if (width <= 800) return "smallTablet";
    else if (width <= 1200) return "tablet";
    else return "desktop";
  });

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setDevice("mobile");
      else if (width <= 800) setDevice("smallTablet");
      else if (width <= 1200) setDevice("tablet");
      else setDevice("desktop");
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    deviceType: device,
    isMobile: device === "mobile",
    isSmallTablet: device === "smallTablet",
    isTablet: device === "tablet",
    isDesktop: device === "desktop"
  };
};
