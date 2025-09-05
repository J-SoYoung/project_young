import { User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { UserProfile } from "../types/user";

const USERS = "users";

const toProfile = (uid: string, googleUser: FirebaseUser) => {
  return {
    userId: uid,
    email: googleUser.email ?? "",
    username: googleUser.displayName ?? "사용자",
    profileImage: googleUser.photoURL ?? "",
    role: "user",
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
};

export const getOrCreateUserProfile = async (
  googleUser: FirebaseUser,
  isOwnerUid: string
) => {
  const ref = doc(db, USERS, googleUser.uid);
  const snapshot = await getDoc(ref);

  // db에 유저 프로필이 없으면 새로 생성
  if (!snapshot.exists()) {
    const baseUser = toProfile(googleUser.uid, googleUser);
    const role = isOwnerUid && isOwnerUid === googleUser.uid ? "owner" : "user";

    const userProfileData = {
      ...baseUser,
      role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await setDoc(ref, userProfileData, { merge: true }); // merge: true는 기존 데이터에 덮어쓰지 않고 병합
    console.log("firebase db 저장 데이터 ", userProfileData);
    return userProfileData as UserProfile;
  } else {
    // 있으면 기존 프로필을 반환
    return snapshot.data() as UserProfile;
  }
};

export const updateUserProfile = async () => {};

export const subscribeUserProfile = async (
  uid: string,
  setProfile: (p: UserProfile | null) => void
) => {
  const ref = doc(db, USERS, uid);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    return setProfile(null);
  } else {
    const profile = snapshot.data() as UserProfile;
    return setProfile(profile);
  }
};
