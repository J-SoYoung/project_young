import styles from "./styles/home.module.css";
import { deepdives, portfolio, techNotes, thoughts } from "./exampleData";
import { NoteSectionList } from "./components/NoteSectionList";
import { DeepSection } from "./components/DeepSection";
import { PortfolioSection } from "./components/PortfolioSection";

export const Home = () => {
  return (
    <main className={styles.main}>
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

      <NoteSectionList
        title={"Tech Notes"}
        moreToLink={"/tech-notes"}
        description={
          "프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다"
        }
        posts={techNotes}
      />
      <NoteSectionList
        title={"thoughts"}
        moreToLink={"/thoughts"}
        description={
          "다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다"
        }
        posts={thoughts}
      />
      <DeepSection posts={deepdives} />
      <PortfolioSection posts={portfolio} />
    </main>
  );
};
