// Add Posts
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../service/firebase";
import { CommentType, Post } from "../types/posts";

// Get Posts // 카테고리 리스트 가져오기
export const getPostsByCategory = async (category: string) => {
  const q = query(collection(db, "posts"), where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  })) as Post[];
};

// Get Post // 상세페이지 게시글 가져오기
export const getPostById = async (
  category: string,
  id: string
): Promise<Post | null> => {
  // post
  const postQuery = query(
    collection(db, "posts"),
    where("category", "==", category),
    where("id", "==", id)
  );

  const postSnapshot = await getDocs(postQuery);
  if (postSnapshot.empty) {
    return null;
  } else {
    const postDoc = postSnapshot.docs[0];

    // comment
    const commentQuery = query(collection(db, "posts", id, "comments"));
    const commentSnapshot = await getDocs(commentQuery);
    if (commentSnapshot.empty) {
      return { ...postDoc.data(), id: postDoc.id } as Post;
    } else {
      const commentData = commentSnapshot.docs.map((doc) => {
        const data = doc.data() as CommentType
        // const data = doc.data() as Omit<CommentType, "id">;
        return { ...data, id: doc.id };
      });
      const postBase = postDoc.data() as Post;
      // const postBase = postDoc.data() as Omit<Post, "id" | "comments">;
      return { ...postBase, id: postDoc.id, comments: commentData } as Post;
    }
  }
};

// 게시글 추가
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

// 게시글 수정
export const updatePost = async (post: Post) => {
  try {
    if (!post.id) {
      return;
    }
    const postRef = doc(db, "posts", post.id);
    await updateDoc(postRef, post);
  } catch (error) {
    console.error("Error updatePost document: ", error);
    throw error;
  }
};

type AddCommentProps = {
  postId: string;
  newComment: CommentType;
};

// 댓글 작성
export const addComment = async ({ postId, newComment }: AddCommentProps) => {
  console.log(postId, newComment);
  try {
    const docRef = await addDoc(collection(db, "posts", postId, "comments"), {
      ...newComment
    });
    await setDoc(docRef, { ...newComment, id: docRef.id });
    return { ...newComment, id: docRef.id };
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
};

// 댓글 삭제
export const deleteComment = async (postId: string, commentId: string) => {
  console.log(postId, commentId);
  try {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    await deleteDoc(commentRef);
    console.log("댓글 삭제 완료:", commentId);
  } catch (error) {
    console.error(error);
  }
};
