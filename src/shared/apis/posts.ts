// Add Posts
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  doc
} from "firebase/firestore";

import { db } from "../service/firebase";
import { PostWithId, Post } from "../types/posts";

// Get Posts // 카테고리 리스트
export const getPostsByCategory = async (category: string) => {
  const q = query(collection(db, "posts"), where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  })) as PostWithId[];
};

// Get Post // 상세페이지 게시글
export const getPostById = async (category: string, id: string) => {
  const q = query(
    collection(db, "posts"),
    where("category", "==", category),
    where("id", "==", id)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    return null;
  } else {
    const doc = snapshot.docs[0];
    return {
      ...doc.data(),
      id: doc.id
    } as PostWithId;
  }
};

export const addPost = async (post: Post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    await setDoc(docRef, { ...post, id: docRef.id });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id as string;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const updatePost = async (post: PostWithId) => {
  try {
    const postRef = doc(db, "posts", post.id);
    // const { id, ...postData } = post;
    await updateDoc(postRef, post);
  } catch (error) {
    console.error("Error updatePost document: ", error);
    throw error;
  }
};
