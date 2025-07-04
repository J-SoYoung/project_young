// Add Posts
import { collection, query, where, getDocs } from "firebase/firestore";
import { Post } from "../types/posts";
import { db } from "../service/firebase";

// export const addPost = async (post: Omit<Post, "id" | "createdAt">) => {
//   try {
//     const docRef =
//   } catch (error) {}
// };

// Get Posts // 카테고리 리스트 
export const getPostsByCategory = async (category: string) => {
  const q = query(collection(db, "posts"), where("category", "==", category));
  const snapshot = await getDocs(q);
  const posts: Post[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Post, "id">)
  }));
  return posts;
};

// Get Post // 상세페이지 게시글
export const getPostById = async (category: string, id: string) => {
  const q = query(
    collection(db, "posts"),
    where("category", "==", category),
    where("id", "==", id)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...(doc.data() as Omit<Post, "id">)
  };
};
