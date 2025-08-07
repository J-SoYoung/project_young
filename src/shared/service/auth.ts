import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

// google Provider인스턴스 생성
const provider = new GoogleAuthProvider();

// google login
export const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log("desktop로그인 결과", result.user);
    return result.user;
};

// logout
export const logout = async () => {
  await signOut(auth);
};
