export type Category =
  | "tech-notes"
  | "thoughts"
  | "deepdives"
  | "portfolio"
  | "";

export type BasePost = {
  author: string;
  authorProfile: string;
  date: string;
  category: Category;
  title: string;
  content: string;
  imageSrc: string;
};

export type FormState = {
  category: Category;
  title: string;
  content: string;
  imageSrc: string;
  description?: string;
  githublink?: string;
};

export type PortfolioPost = BasePost & {
  description: string;
  githublink: string;
};

export type Post = BasePost | PortfolioPost;

export type PostWithId = Post & {
  id: string;
};
