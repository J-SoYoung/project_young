import styles from "./styles/home.module.css";
import { Section } from "./components/Section";

export const Home = () => {
  return (
    <main>
      <section className={styles.greeting}>
        <h1>
          안녕하세요
          <br />
          Frontend Developer
          <br />
          정소영입니다.
        </h1>
        <div>
          프론트엔드 개발자이자 블로거입니다.
          <br />
          저는 Weaver입니다. 모든 것을 엮어 최고의 결과물을 만들어냅니다.
          <br />
          <p>Everything here is written by me, not AI.</p>
        </div>
      </section>

      <Section
        title={"Tech Notes"}
        moreToLink={"/menu/tech-notes"}
        description={
          "프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다"
        }
      />
      <Section
        title={"Thoughts"}
        moreToLink={"/menu/thoughts"}
        description={"개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다"}
      />
      <Section
        title={"Deep Dives"}
        moreToLink={"/menu/deepdives"}
        description={
          "다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다"
        }
      />
      <Section
        title={"Portfolio"}
        moreToLink={"/menu/portfolio"}
        description={"다양한 프로젝트와 작업물을 정리한 포트폴리오입니다"}
      />
    </main>
  );
};
