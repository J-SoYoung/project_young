export type UserProfile = {
  biography?: string;            // 서비스 전용 소개
  createdAt: string;            
  email: string;
  profileImage: string;          // 서비스 프로필 (수정 가능)
  role: "owner" | "user";        // 블로그 운영자 구분
  updatedAt: string;
  userId: string;                // = uid
  username: string;              // 서비스 표시명 (수정 가능)
};