import { auth } from "./firebase";
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "firebase/auth";

// google Provider인스턴스 생성
const provider = new GoogleAuthProvider();

// google login
export const signInWithGoogle = async (isPopup: boolean) => {
  if (isPopup) {
    console.log("desktop로그인");
    const result = await signInWithPopup(auth, provider);
    console.log("desktop로그인 결과", result.user);
    return result.user;
  } else {
    console.log("redirect 로그인");
    await signInWithRedirect(auth, provider);
  }
};

// logout
export const logout = async () => {
  await signOut(auth);
};
