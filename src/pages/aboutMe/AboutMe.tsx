import profile from "../../assets/m2.jpg";
import styles from "./aboutMe.module.css";

export const AboutMe = () => {
  return (
    <main>
      <img src={profile} className={styles.profileImage}/>
      <section className="aboutMe">
        <h1>About Me</h1>
        <p>
          안녕하세요, 프론트엔드 개발자 정소영입니다.
          <br />
          저는 웹 개발에 열정을 가지고 있으며, 사용자 경험을 최우선으로
          생각합니다.
          <br />
          다양한 프로젝트를 통해 기술을 연마하고, 지속적으로 성장하는 것을
          목표로 하고 있습니다.
        </p>
      </section>
    </main>
  );
};
