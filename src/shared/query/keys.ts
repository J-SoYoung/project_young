export const keys = {
  posts: {
    detail: (id: string) => ["posts", "detail", { id }] as const
  },
  comments: {
    byPost: (postId: string) => ["comments", "byPost", { postId }] as const
  },
  profile: {}
} as const;
