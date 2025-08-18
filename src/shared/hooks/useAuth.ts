import { useContext } from "react";
import { AuthContext } from "../contexts/AauthProvider";

export const useAuth = () => {
  const userContext = useContext(AuthContext);
  if (!userContext) throw new Error("userContext가 없습니다");
  return userContext;
};
