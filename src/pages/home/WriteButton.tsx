import { FaPlus } from "react-icons/fa";
import styles from "./styles/writeButton.module.css";
import { useNavigate } from "react-router-dom";

export const WriteButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.writeButton} onClick={() => navigate(`/write`)}>
      <FaPlus />
    </button>
  );
};
