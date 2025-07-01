import { deepdives, portfolio, techNotes, thoughts } from "../home/exampleData";
import { DeepdiveLists } from "./components/DeepdiveLists";
import { NoteLists } from "./components/NoteLists";
import { PortfolioLists } from "./components/PortfolioLists";

export const getMenuConfig = (category: string | undefined) => {
  switch (category) {
    case "tech-notes":
      return {
        title: "Tech Notes",
        component: <NoteLists posts={techNotes} />,
        desc: "프로그래밍 기술 팁, 트러블 슈팅 등의 메모를 작성한 글입니다"
      };
    case "thoughts":
      return {
        title: "Thoughts",
        component: <NoteLists posts={thoughts} />,
        desc: "개발 및 프로젝트 등 대한 개인적인 생각을 정리한 글입니다"
      };
    case "deepdives":
      return {
        title: "Deep Dives",
        component: <DeepdiveLists posts={deepdives} />,
        desc: "다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다"
      };
    case "portfolio":
      return {
        title: "Portfolio",
        component: <PortfolioLists posts={portfolio} />,
        desc: "다양한 프로젝트와 작업물을 정리한 포트폴리오입니다"
      };
    default:
      return { title: "", posts: [], desc: "" };
  }
};
