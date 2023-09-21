import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className={`${styles.btn} ${styles.back}`}
    >
      Back &larr;
    </button>
  );
}

export default BackButton;
