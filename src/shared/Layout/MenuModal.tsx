import { useEffect, useRef } from "react";
import { MenuButton } from "./Menubutton";
import styles from "./styles/menuModal.module.css";

type Props = {
  onClose: () => void;
};

export const MenuModal = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        <MenuButton menuType={"modal"}  onClose={onClose}  />
      </div>
    </div>
  );
};
