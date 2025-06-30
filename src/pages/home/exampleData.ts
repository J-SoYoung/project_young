
type NotesData = {
  id: string;
  date: string;
  title: string;
  link: string;
};

type DeepdivesData = {
  id: string;
  date: string;
  title: string;
  link: string;
  imageSrc: string;
  imageDesc: string;
};

type PortfolioData = {
  id:string
  date: string;
  title: string;
  description: string;
  githublink: string;
  link: string;
};

export const techNotes: NotesData[] = [
  {
    id: "1",
    date: "2025.03",
    title: "React 상태 관리 리팩토링",
    link: "/tech-notes/1"
  },
  {
    id: "2",
    date: "2025.02",
    title: "Vite에서 ESLint 설정",
    link: "/tech-notes/2"
  },
  {
    id: "3",
    date: "2025.01",
    title: "TypeScript 타입 유틸리티",
    link: "/tech-notes/3"
  }
];

export const thoughts: NotesData[] = [
  {
    id: "1",
    date: "2025.03",
    title: "개발자와 커뮤니케이션 감각",
    link: "/thoughts/1"
  },
  {
    id: "1",
    date: "2025.04",
    title: "나만의 블로그를 만든 이유",
    link: "/thoughts/1"
  },
  {
    id: "1",
    date: "2025.05",
    title: "AI시대의 개발자의 역할은",
    link: "/thoughts/1"
  }
];

export const deepdives: DeepdivesData[] = [
  {
    id: "1",
    date: "2025.05",
    title: "React 프로젝트 구조 설계",
    link: "/deepdives/1",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "react"
  },
  {
    id: "2",
    date: "2025.04",
    title: "TypScript 타입 설계",
    link: "/deepdives/2",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "TypeScript"
  },
  {
    id: "3",
    date: "2025.06",
    title: "JavaScript의 this 완전정복",
    link: "/deepdives/3",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "JavaScript"
  }
];

export const portfolio: PortfolioData[] = [
  { id: '1',
    date: "2025.01",
    title: "BOOKSOME",
    description: "독서 다이어리 기반 리뷰 서비스",
    githublink: "https://github.com/J-SoYoung/pwa-book-some",
    link: "/portfolio/1"
  },
  {id: '2',
    date: "2025.06",
    title: "DEV.SoYoung BLOG",
    description: "Vite + Firebase 블로그 프로젝트",
    githublink: "https://github.com/J-SoYoung/project_young",
    link: "/portfolio/2"
  }
];
