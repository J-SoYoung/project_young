import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../service/firebase";
import { UserProfile } from "../types/user";
import { subscribeUserProfile } from "../apis/users";

type AuthContextType = {
  authUser: FirebaseUser | null; // Firebase Auth User (토큰/UID 등 필요할 때)
  profile: UserProfile | null; // 서비스용 Profile (전역 UI는 이걸 쓰자)
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  authUser: null,
  profile: null,
  loading: true
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // 1) Firebase Auth 상태 구독
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setAuthUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // 2) authUser가 있으면 Firestore Profile 실시간 구독
  useEffect(() => {
    if (!authUser) {
      setProfile(null);
      return;
    }
    const unsub = subscribeUserProfile(authUser.uid, setProfile);
    return () => unsub();
  }, [authUser]);

  const value = useMemo(
    () => ({ authUser, profile, loading }),
    [authUser, profile, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
