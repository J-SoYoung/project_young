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
  authorId?: string;
  authorProfile: string;
  category: Category;
  content: string;
  createdAt: string;
  imageSrc: string;
  title: string;
  githublink?: string;
  description?: string;
  comments?: CommentType[];
};

export type CommentBase = {
  id?: string;
  author: string;
  comment: string;
  createdAt: string;
  postId: string;
  userId: string;
};
export interface CommentType extends CommentBase {
  id?: string;
}
export interface ActicityCommentType extends CommentBase {
  id: string;
  postTitle: string;
}

export type MypageActiveListType = {
  id: string;
  title: string;
  subTitle?: string;
  createdAt: string;
};
