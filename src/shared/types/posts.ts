export type Category =
  | "tech-notes"
  | "thoughts"
  | "deepdives"
  | "portfolio"
  | "";

export type FormState = {
  category: Category;
  title: string;
  content: string;
  imageSrc: string;
  description?: string;
  githublink?: string;
};

export type Post = {
  id?: string;
  author: string;
  authorProfile: string;
  category: Category;
  content: string;
  date: string;
  imageSrc: string;
  title: string;
  githublink?: string;
  description?: string;
  comments?: CommentType[];
};

export type CommentType = {
  id: string;
  userId: string;
  author: string;
  content: string;
  createdAt: string;
};
