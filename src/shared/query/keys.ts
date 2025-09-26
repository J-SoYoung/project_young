export const keys = {
  posts: {
    detail: (id: string) => ["posts", "detail", { id }] as const,
    editPost: (id: string) => ["posts", "editPost", { id }] as const,
    list: (category: string) =>
      ["posts", "category", { category }] as const,
    allMyPosts: () => ["posts", "allPosts"] as const
  },
  comments: {
    byPost: (postId: string) => ["comments", "byPost", { postId }] as const,
    allMyComments: (userId: string) =>
      ["comments", "allMyComments", { userId }] as const
  },
  profile: {}
} as const;
