import styles from "../styles/greeting.module.css";
import profileIcon from "../../../assets/profile-icon.png";
import { Link } from "react-router-dom";

export const Gretting = () => {
  return (
    <section className={styles.greeting}>
      <div className={styles.intro}>
        <h1>
          안녕하세요
          <br />
          Frontend Developer
          <br />
          정소영입니다.
        </h1>
        <p>
          프론트엔드 개발자이자 블로거입니다. <br />
          의미 있는 모든 것을 엮어 <br />
          최고의 결과물을 만들어냅니다. <br />
          Everything here is written by me, not AI.
        </p>
      </div>
      <div className={styles.profileContainer}>
        <img src={profileIcon} className={styles.profile} />
        <Link to={"/aboutMe"} className={styles.aboutMe}>
          About Me
        </Link>
      </div>
    </section>
  );
};
