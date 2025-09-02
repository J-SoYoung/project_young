import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./writeForm.module.css";
import profileImg from "../../../assets/m2.jpg";

import { FormState, Post } from "../../types/posts";
import { addPost, updatePost } from "../../apis/posts";
import { getTodayDate } from "../../utils/getTodayDate";
import { CATEGORIES, CATEGORY_META } from "../../types/category";

type Mode = "write" | "edit";
type Props = {
  mode: Mode;
  title: string;
  buttonText: string;
  initialData?: Post;
};

export const WriteForm = ({ mode, title, initialData, buttonText }: Props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    title: "",
    content: "",
    imageSrc: "",
    description: "",
    githublink: "",
    category: ""
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormState({
        title: initialData.title || "",
        content: initialData.content || "",
        imageSrc: initialData.imageSrc || "",
        description: initialData.description || "",
        githublink: initialData.githublink || "",
        category: initialData.category || ""
      });
    }
  }, [initialData, mode]);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const basePost = {
      author: "SoYoung",
      authorProfile: profileImg,
      createdAt:
        mode === "edit"
          ? initialData?.createdAt ?? getTodayDate()
          : getTodayDate(),
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

    try {
      if (mode === "edit" && initialData?.id) {
        // 글 수정
        await updatePost({ ...finalPost, id: initialData.id });
        alert("글 수정이 완료되었습니다!");
        navigate(`/detail/${initialData.id}`);
      } else {
        // 글 작성
        const postId = await addPost(finalPost);
        alert("글 작성이 완료되었습니다!");
        navigate(`/detail/${postId}`);
      }
    } catch (error) {
      console.log(error);
      alert(`글 ${mode === "edit" ? "수정" : "작성"} 중 오류가 발생했습니다`);
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <p> 포스트를 {mode === "edit" ? "수정" : "작성"}하고 있습니다 ... </p>
    );

  return (
    <section>
      <h1>{title}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="">카테고리를 선택해주세요</option>
          {CATEGORIES.map((c) => {
            return <option value={c}>{CATEGORY_META[c].label}</option>;
          })}
        </select>

        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
          className={styles.input}
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
          {buttonText}
        </button>
      </form>
    </section>
  );
};
