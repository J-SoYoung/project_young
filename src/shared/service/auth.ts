import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// google Provider인스턴스 생성

// google login
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      userId: user.uid,
      email: user.email,
      username: user.displayName,
      profileImage: user.photoURL,
      createdAt: new Date().toISOString(),
    });
  }
  return user;
};

// logout
export const logout = async () => {
  await signOut(auth);
};
