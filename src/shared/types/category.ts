import { IconType } from "react-icons";
import { FcAnswers, FcIdea, FcCamera, FcComments } from "react-icons/fc"; //Flat Color Icons

export const CATEGORIES = [
  "tech-notes",
  "thoughts",
  "deepdives",
  "portfolio"
] as const;

export type Category = (typeof CATEGORIES)[number];
export const CATEGORY_META: Record<
  Category,
  { label: string; icon: IconType; description: string }
> = {
  "tech-notes": {
    label: "Tech Notes",
    icon: FcAnswers, // icon컴포넌트 함수
    description: "개발 관련 기술 노트입니다"
  },
  thoughts: {
    label: "Thoughts",
    icon: FcIdea,
    description: "개발 / 일상적인 생각을 정리한 글입니다"
  },
  deepdives: {
    label: "Deep Dives",
    icon: FcComments,
    description: "다양한 개발 주제에 대한 심층 분석, 튜토리얼을 정리한 글입니다"
  },
  portfolio: {
    label: "Portfolio",
    icon: FcCamera,
    description: "다양한 프로젝트와 작업물을 정리한 포트폴리오입니다"
  }
};
