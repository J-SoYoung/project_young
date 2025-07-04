export type Category =
  | "tech-notes"
  | "thoughts"
  | "deepdives"
  | "portfolio"
  | "";

export interface Post {
  id?: string; // Firestore 문서 ID
  author: string;
  authorProfile: string;
  category: Category;
  content: string;
  date: string;
  imageSrc: string;
  link: string;
  title: string;
  // portfolio 전용 필드
  githublink?: string;
  description?: string;
}
