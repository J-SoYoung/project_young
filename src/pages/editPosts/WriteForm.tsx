import { useEffect, useState } from "react";
import { FormState, PostWithId } from "../../shared/types/posts";
import styles from "./writeForm.module.css";
import { updatePost } from "../../shared/apis/posts";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  initialData: PostWithId;
  buttonText: string;
  // onSubmit: () => void;
};
export const WriteForm = ({ title, initialData, buttonText }: Props) => {
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
    if (initialData) {
      setFormState({
        title: initialData.title || "",
        content: initialData.content || "",
        imageSrc: initialData.imageSrc || "",
        description: initialData.description || "",
        githublink: initialData.githublink || "",
        category: initialData.category || ""
      });
    }
  }, [initialData]);

  const handleImageUpload = () => {};
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const basePost = {
      author: initialData.author,
      authorProfile: initialData.authorProfile,
      date: initialData.date,
      category: formState.category ?? initialData.category,
      title: formState.title ?? initialData.title,
      content: formState.content ?? initialData.content,
      imageSrc: formState.imageSrc ?? initialData.imageSrc
    };

    let finalPost = {
      ...basePost,
      id: initialData.id
    };

    if (formState.category === "portfolio") {
      finalPost = {
        ...finalPost,
        description: formState.description ?? initialData.description,
        githublink: formState.githublink ?? initialData.githublink
      };
    }

    try {
      await updatePost(finalPost);
      alert("수정이 완료되었습니다!");
      navigate(`/detail/${finalPost.category}/${finalPost.id}`);
    } catch (error) {
      console.log(error);
      alert("글 수정 중 오류가 발생했습니다");
      setIsLoading(false);
    }
  };

  if (isLoading) return <p> 포스트를 수정하고 있습니다 ... </p>;

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
