import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "./firebase";
import { getOrCreateUserProfile } from "../apis/users";

const BLOG_OWNER_UID = import.meta.env.VITE_BLOG_OWNER_UID as string;

// google login
export const signInWithGoogle = async () => {
  // google Provider인스턴스 생성
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const googleUser = result.user;

  const profile = await getOrCreateUserProfile(googleUser, BLOG_OWNER_UID);
  return profile;
};

// logout
export const logout = async () => {
  await signOut(auth);
};
