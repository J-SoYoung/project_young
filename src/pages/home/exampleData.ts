type NotesData = {
  author: string;
  authorProfile: string;
  id: string;
  date: string;
  title: string;
  link: string;
  content: string;
};

type DeepdivesData = {
  author: string;
  authorProfile: string;
  id: string;
  date: string;
  title: string;
  link: string;
  content: string;
  imageSrc: string;
  imageDesc: string;
};

type PortfolioData = {
  author: string;
  authorProfile: string;
  id: string;
  date: string;
  title: string;
  link: string;
  content: string;
  description: string;
  githublink: string;
};

export const techNotes: NotesData[] = [
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "1",
    date: "2025.03",
    title: "React 상태 관리 리팩토링",
    link: "/detail/tech-notes/1",
    content:
      "<h3>React 상태 관리를 정리하며</h3><br/> <p>복잡해진 상태를 리팩토링하며 Recoil을 도입했습니다. props drilling 문제를 해결하고, 전역 상태 흐름을 단순하게 구성해 유지보수성과 확장성을 높인 과정을 정리했습니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...In many parts of the country, walking is not an option.</p> <p>There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "2",
    date: "2025.02",
    title: "Vite에서 ESLint 설정",
    link: "/detail/tech-notes/2",
    content:
      "<h3>Vite에서 ESLint 설정</h3> <p>Vite 프로젝트에서 ESLint와 Prettier를 적용하며 설정 순서, 오류 해결법, VSCode 연동 팁까지 정리했습니다. 협업과 코드 일관성을 위한 초기 세팅 노하우를 담았습니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "3",
    date: "2025.01",
    title: "TypeScript 타입 유틸리티",
    link: "/detail/tech-notes/3",
    content:
      "<h3>TypeScript 타입 유틸리티</h3><p>Partial, Pick, Omit 등 주요 타입 유틸리티를 정리하고, 실제 사용 예시를 통해 타입 설계를 더 효율적으로 만드는 방법을 소개합니다. 실무에 바로 적용 가능한 팁입니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>!"
  }
];

export const thoughts: NotesData[] = [
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "1",
    date: "2025.03",
    title: "개발자와 커뮤니케이션 감각",
    link: "/detail/thoughts/1",
    content:
      "<h3>개발자와 커뮤니케이션 감각</h3> <p> 개발자에게 중요한 능력 중 하나는 커뮤니케이션입니다. 기획자, 디자이너와의 협업 과정에서 겪은 갈등과 조율, 그리고 그 속에서 얻은 감각을 솔직하게 정리했습니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "2",
    date: "2025.04",
    title: "나만의 블로그를 만든 이유",
    link: "/detail/thoughts/2",
    content:
      "<h3>나만의 블로그를 만든 이유</h3><p> 기록은 개발 실력을 성장시킵니다. 블로그를 직접 만들며 기술을 더 깊이 이해했고, 나만의 아카이브를 가지는 것의 가치와 성취감을 이야기합니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "3",
    date: "2025.05",
    title: "AI시대의 개발자의 역할은",
    link: "/detail/thoughts/3",
    content:
      "<h3>AI 시대의 개발자의 역할은</h3> <p> AI가 많은 걸 대체하는 시대, 개발자는 어떤 역량을 갖춰야 할까요? 코드 이상의 사고력, 문제 해결력, 그리고 기술을 활용하는 능력의 중요성을 고민했습니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  }
];

export const deepdives: DeepdivesData[] = [
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "1",
    date: "2025.05",
    title: "React 프로젝트 구조 설계",
    link: "/detail/deepdives/1",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "react",
    content:
      "<h3>React 프로젝트 구조 설계</h3> <p> 컴포넌트, 상태 관리, 디렉토리 구조 등 React 프로젝트를 체계적으로 설계하기 위한 구조 설계 노하우를 담았습니다. 유지보수와 협업을 고려한 구성 기준입니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "2",
    date: "2025.04",
    title: "TypScript 타입 설계",
    link: "/detail/deepdives/2",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "TypeScript",
    content:
      "<h3>TypeScript 타입 설계</h3><p> 타입은 문서이자 약속입니다. 실무에서의 인터페이스 구성, 유틸리티 타입 활용법, 재사용 가능한 구조를 중심으로 타입 설계의 기본과 실전 적용 방법을 소개합니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "3",
    date: "2025.06",
    title: "JavaScript의 this 완전정복",
    link: "/detail/deepdives/3",
    imageSrc: "https://placehold.co/50x50/EEE/31343C?font=lora&text=Lora",
    imageDesc: "JavaScript",
    content:
      "<h3>JavaScript의 this 완전정복</h3> <p>this는 JavaScript에서 가장 혼란스러운 개념 중 하나입니다. 다양한 상황에서의 this 바인딩 방식과 올바른 이해를 돕는 실전 예제를 정리했습니다.</p><p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  }
];

export const portfolio: PortfolioData[] = [
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "1",
    date: "2025.01",
    title: "BOOKSOME",
    description: "독서 다이어리 기반 리뷰 서비스",
    githublink: "https://github.com/J-SoYoung/pwa-book-some",
    link: "/detail/portfolio/1",
    content:
      "<h3>BOOKSOME</h3> <p>BOOKSOME은 독서 다이어리 기반 리뷰 플랫폼입니다. 책 검색, 리뷰 작성, 북마크 기능을 갖추고 있으며, React와 Firebase, PWA 기술을 활용해 개발했습니다.</p> <p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  },
  {
    author: "SoYoung",
    authorProfile: "https://placehold.co/50x50",
    id: "2",
    date: "2025.06",
    title: "DEV.SoYoung BLOG",
    description: "Vite + Firebase 블로그 프로젝트",
    githublink: "https://github.com/J-SoYoung/project_young",
    link: "/detail/portfolio/2",
    content:
      "<h3>DEV.SoYoung BLOG</h3> <p>기술 블로그를 직접 만들며 Vite, React, Firebase를 활용했습니다. Markdown 기반 에디터와 모듈 CSS 스타일링 등 기능 구현을 통해 기술과 기록의 즐거움을 경험했습니다.</p> <p>One of the biggest culture shocks for Europeans going to the US is its cars. They’re bigger, heavier and people drive everywhere...</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p><p>In many parts of the country, walking is not an option. There is no pavement to walk on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nihil! Rerum accusantium ut maiores provident veritatis similique, aliquam voluptas laboriosam tempora doloribus ipsa! Ea assumenda sed iste alias veniam!</p>"
  }
];
