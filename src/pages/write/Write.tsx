import { useState } from "react";
import styles from "./write.module.css";

export const Write = () => {
  const [formState, setFormState] = useState({
    category: "",
    title: "",
    content: "",
    tagInput: "",
    tags: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && formState.tagInput.trim()) {
      e.preventDefault();
      if (formState.tags.length >= 3) return;

      const cleanTag = formState.tagInput.startsWith("#")
        ? formState.tagInput
        : `#${formState.tagInput}`;

      if (!formState.tags.includes(cleanTag)) {
        setFormState((prev) => ({
          ...prev,
          tags: [...prev.tags, cleanTag],
          tagInput: ""
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      category: formState.category,
      title: formState.title,
      content: formState.content,
      tags: formState.tags
    };
    console.log("제출할 데이터:", postData);
    // Firebase 연동 or API 요청 가능
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">카테고리</option>
          <option value="memo">Memo</option>
          <option value="book">Book</option>
          <option value="achiving">Achiving</option>
          <option value="study">Study</option>
        </select>

        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
          className={styles.titleInput}
        />

        <textarea
          name="content"
          value={formState.content}
          onChange={handleChange}
          placeholder="오늘의 포스팅"
          className={styles.textarea}
        />

        <div className={styles.tagWrapper}>
          <input
            type="text"
            name="tagInput"
            value={formState.tagInput}
            onChange={handleChange}
            onKeyDown={handleTagKeyDown}
            placeholder="#태그입력"
            className={styles.tagInput}
          />
          <div className={styles.tagList}>
            {formState.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          글 작성
        </button>
      </form>
    </div>
  );
};
