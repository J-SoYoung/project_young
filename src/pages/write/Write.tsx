import { useState } from "react";
import styles from "./write.module.css";

type Category = "tech-notes" | "thoughts" | "deepdives" | "portfolio" | "";

type BasePost = {
  author: string;
  authorProfile: string;
  date: string;
  category: Category;
  title: string;
  content: string;
  imageSrc: string;
};

type PortfolioPost = BasePost & {
  description: string;
  githublink: string;
};

type Post = BasePost | PortfolioPost;

type FormState = {
  category: Category;
  title: string;
  content: string;
  imageSrc: string;
  description?: string;
  githublink?: string;
};

export const Write = () => {
  const [formState, setFormState] = useState<FormState>({
    category: "",
    title: "",
    content: "",
    imageSrc: "",
    description: "",
    githublink: ""
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prev) => ({
          ...prev,
          imageSrc: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 날짜 형식
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const basePost = {
      author: "SoYoung",
      authorProfile: "https://placehold.co/50x50", // 필요에 따라 정적 이미지 경로
      date: getTodayDate(),
      category: formState.category,
      title: formState.title,
      content: formState.content,
      imageSrc: formState.imageSrc
    };

    let finalPost: Post = { ...basePost };

    if (formState.category === "portfolio") {
      finalPost = {
        ...finalPost,
        description: formState.description,
        githublink: formState.githublink
      };
    }

    console.log("제출할 데이터:", finalPost);
    // Firebase 연동 or API 요청 가능
  };

  return (
    <main>
      <h1>글 작성</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="">카테고리를 선택해주세요</option>
          <option value="tech-notes">TechNotes</option>
          <option value="thoughts">Thoughts</option>
          <option value="deepdives">DeepDives</option>
          <option value="portfolio">Portfolio</option>
        </select>

        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
          className={styles.input}
          // className={styles.titleInput}
          required
        />
        <div className={styles.imageBox}>
          <label>이미지 (선택)</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {formState.imageSrc && (
            <img
              src={formState.imageSrc}
              alt="업로드된 이미지 미리보기"
              style={{ width: "200px", marginTop: "10px" }}
            />
          )}
        </div>

        <textarea
          name="content"
          value={formState.content}
          onChange={handleChange}
          placeholder="오늘의 포스팅"
          className={styles.textarea}
          required
        />

        {/* 포트폴리오 선택 시 추가 필드 */}
        {formState.category === "portfolio" && (
          <div className={styles.portfolio}>
            <label>Portfolio</label>
            <input
              type="text"
              name="githublink"
              value={formState.githublink}
              onChange={handleChange}
              placeholder="Github 링크를 넣어주세요"
              className={styles.input}
              required
            />
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              placeholder="포트폴리오에 대해 설명해주세요"
              className={styles.textarea}
              required
            />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          글 작성
        </button>
      </form>
    </main>
  );
};
