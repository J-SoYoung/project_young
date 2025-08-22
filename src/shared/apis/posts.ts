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
  deleteDoc,
  orderBy,
  collectionGroup,
  getDoc
} from "firebase/firestore";

import { db } from "../service/firebase";
import { ActicityCommentType, CommentType, Post } from "../types/posts";

// Get All Posts // 전체 게시글 가져오기
export const getAllPosts = async () => {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    })) as Post[];
  } catch (error) {
    console.error("Error getting posts: ", error);
    return [];
  }
};

// Get Posts // 카테고리 리스트 가져오기
export const getPostsByCategory = async (category: string) => {
  try {
    const q = query(collection(db, "posts"), where("category", "==", category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    })) as Post[];
  } catch (error) {
    console.error("Error getting posts by category: ", error);
    return [];
  }
};

// Get Post // 상세페이지 게시글 가져오기
export const getPostById = async (id: string): Promise<Post | null> => {
  // post
  const postQuery = query(collection(db, "posts"), where("id", "==", id));
  try {
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
          const data = doc.data() as CommentType;
          // const data = doc.data() as Omit<CommentType, "id">;
          return { ...data, id: doc.id };
        });
        const postBase = postDoc.data() as Post;
        // const postBase = postDoc.data() as Omit<Post, "id" | "comments">;
        return { ...postBase, id: postDoc.id, comments: commentData } as Post;
      }
    }
  } catch (error) {
    console.error("Error getting post by id: ", error);
    return null;
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

// 댓글 작성
export const addComment = async (newComment: CommentType) => {
  const postId = newComment.postId;
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

// 댓글 전체 가져오기 (Mypage - activity)
export const getAllComments = async (userId: string) => {
  try {
    const q = query(
      collectionGroup(db, "comments"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    const comments = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    })) as CommentType[];

    // const commentInfo = comments.map(async (comment) => {
    //   console.log("댓글", comment);
    //   const p = query(
    //     collection(db, "posts"),
    //     where("id", "==", comment.postId)
    //   );
    //   const snapshot = await getDocs(p);
    //   const post = snapshot.docs[0].data();
    //   console.log(comment, post)
    //   return { ...comment, ...post };
    // });

    const withPost = await Promise.all(
      comments.map(async (c) => {
        const postRef = doc(db, "posts", c.postId);
        const postSnapshot = await getDoc(postRef);
        const post = postSnapshot.exists()
          ? ({ id: postSnapshot.id, ...postSnapshot.data() } as Post)
          : null;
        return {
          ...c,
          postTitle: post ? post.title : "삭제된 게시글"
        };
      })
    );
    return withPost as ActicityCommentType[];
  } catch (error) {
    console.error("Error getting comments: ", error);
    return [];
  }
};
