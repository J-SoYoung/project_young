import { useNavigate } from "react-router-dom";
import styles from "./writeButton.module.css";
import { FaPencilAlt } from "react-icons/fa";

export const WriteButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.writeButton} onClick={() => navigate(`/write`)}>
      <FaPencilAlt />
    </button>
  );
};
