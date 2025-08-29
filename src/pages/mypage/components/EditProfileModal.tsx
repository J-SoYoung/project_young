import { useEffect, useRef, useState } from "react";
import styles from "../styles/editProfileModal.module.css";
import { UserProfile } from "../../../shared/types/user";

type EditProfileModalProps = {
  profile: UserProfile;
  onClose: () => void;
};
export const EditProfileModal = ({
  profile,
  onClose
}: EditProfileModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [username, setUsername] = useState(profile.username);
  const [biography, setBiography] = useState(profile.biography ?? "");
  const [profileImage, setProfileImage] = useState(profile.profileImage ?? "");
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [removePhoto, setRemovePhoto] = useState(false);

  useEffect(() => {
    setUsername(profile.username);
    setBiography(profile.biography ?? "");
    setProfileImage(profile.profileImage ?? "");
    setFile(null);
    setRemovePhoto(false);
  }, [profile]);

  const BIOGRAPHY_MAX = 150;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? "";
    if (!file) {
      return null;
    }
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 할 수 있어요");
      e.target.value = "";
      return;
    }
    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      alert(`이미지는 ${MAX_MB}MB 이하로 업로드 해 주세요.`);
      e.target.value = "";
      return;
    }
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(file);
    });
    setFile(file);
  };

  const handleRemovePhoto = () => {
    setFile(null);
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return null;
    });
  };
  
  const handleSubmit = () => {};

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="editProfileTitle"
    >
      <div className={styles.modal} ref={ref}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        <section>
          <header>
            <h3 id="editProfileTitle">Edit Profile</h3>
          </header>
          <form className={styles.body} onSubmit={handleSubmit}>
            {/* Profile */}
            <div className={styles.avatarCol}>
              <div className={styles.avatarWrap}>
                {preview ? (
                  <img src={preview} alt="update profile image" />
                ) : (
                  <img src={profileImage} alt="profile preview" />
                )}
              </div>
              <div className={styles.avatarBtns}>
                <label className={styles.fileBtn}>
                  사진 변경
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>
                <button
                  type="button"
                  className={styles.textBtn}
                  onClick={handleRemovePhoto}
                >
                  사진 제거
                </button>
              </div>
            </div>

            {/* Biography */}
            <div className={styles.formCol}>
              <label className={styles.label}>
                닉네임
                <input
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="닉네임을 입력하세요"
                  maxLength={24}
                  required
                />
              </label>

              <label className={styles.label}>
                소개글
                <textarea
                  className={styles.textarea}
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  placeholder="간단한 소개를 입력하세요 (최대 150자)"
                  maxLength={BIOGRAPHY_MAX}
                  rows={4}
                />
                <span className={styles.counter}>
                  {biography.length}/{BIOGRAPHY_MAX}
                </span>
              </label>
            </div>

            {/* button */}
            <footer className={styles.footer}>
              <button
                type="button"
                className={styles.ghostBtn}
                onClick={onClose}
              >
                취소
              </button>
              <button type="submit" className={styles.primaryBtn}>
                저장
              </button>
            </footer>
          </form>
        </section>
      </div>
    </div>
  );
};
