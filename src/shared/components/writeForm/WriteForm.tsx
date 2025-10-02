import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./writeForm.module.css";
import profileImg from "../../../assets/m2.jpg";

import { FormState, Post } from "../../types/posts";
import { addPost, editPost } from "../../apis/posts";
import { getTodayDate } from "../../utils/getTodayDate";
import { CATEGORIES, CATEGORY_META } from "../../types/category";
import { paths } from "../../../routers/paths";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "../../query/keys";

type Mode = "write" | "edit";
type Props = {
  mode: Mode;
  title: string;
  buttonText: string;
  initialData?: Post;
};

export const WriteForm = ({ mode, title, initialData, buttonText }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

  const { mutate: addPostMutate, isPending: addPostPending } = useMutation({
    mutationFn: (post: Post) => {
      return addPost(post);
    },
    onSuccess: (added: string, variables: Post) => {
      if (variables.category) {
        queryClient.invalidateQueries({
          queryKey: keys.posts.list(variables.category)
        });
      }
      queryClient.invalidateQueries({ queryKey: keys.posts.allMyPosts() });
      navigate(paths.detail({ id: added }));
    },
    onError: (err) => {
      alert("포스트 등록에 실패했습니다. 다시 시도해주세요.");
      console.error("포스트 등록 실패:", err);
    }
  });

  const { mutate: editPostMutate, isPending: editPostPending } = useMutation({
    mutationFn: (post: Post) => editPost(post),
    onSuccess: (editedId: string, variables: Post) => {
      if (variables.category) {
        queryClient.invalidateQueries({
          queryKey: keys.posts.list(variables.category)
        });
      }
      queryClient.invalidateQueries({ queryKey: keys.posts.detail(editedId) });
      queryClient.invalidateQueries({ queryKey: keys.posts.allMyPosts() });
      navigate(paths.detail({ id: editedId }));
    },
    onError: (err) => {
      alert("포스트 수정에 실패했습니다. 다시 시도해주세요.");
      console.error("포스트 수정 실패:", err);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    if (mode === "edit") {
      if (!initialData?.id) {
        alert("수정할 글의 ID가 없습니다.");
        return;
      }
      const payload = { ...finalPost, id: initialData.id };
      editPostMutate(payload);
    } else {
      addPostMutate(finalPost);
    }
  };

  if (addPostPending || editPostPending) {
    return <p>포스트를 {mode === "edit" ? "수정" : "작성"}하고 있습니다 ...</p>;
  }

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
            return (
              <option key={c} value={c}>
                {CATEGORY_META[c].label}
              </option>
            );
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
