import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { LuPencil } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";

import styles from "./styles/detail.module.css";
import { CommentInput, CommentList, MarkdownWithHighlight } from "./components";

import { getPostById } from "../../shared/apis/posts";
import { Post } from "../../shared/types/posts";
import { useAuth } from "../../shared/hooks/useAuth";
import { paths } from "../../routers/paths";
import { keys } from "../../shared/query/keys";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useLoaderData();
  const { profile } = useAuth();
  const isOwner = profile?.userId === import.meta.env.VITE_BLOG_OWNER_UID;

  const {
    data: postWithComments,
    isLoading
    // isError,
    // error
  } = useQuery({
    queryKey: keys.posts.detail(id),
    queryFn: () => getPostById(id),
    enabled: !!id // id 없으면 실행 안 함
  });

  const { comments, ...post } = postWithComments || ({} as Post);

  if (isLoading) return <p> 로딩중 ... </p>;
  if (!post) return <p>포스트를 찾을 수 없습니다</p>;

  const { title, author, authorProfile, createdAt, content } = post;

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.postTitleBox}>
        <h1>{title}</h1>
        {id && isOwner && (
          <LuPencil
            size={20}
            className={styles.icons}
            onClick={() => {
              navigate(paths.edit({ id }));
            }}
          />
        )}
      </div>

      {/* 작성자, 날짜, 좋아요 */}
      <div className={styles.postMeta}>
        <div className={styles.authorInfo}>
          <img
            src={authorProfile}
            alt={author}
            className={styles.authorProfile}
          />
          <div>
            <span className={styles.authorName}>{author}</span>
            <span className={styles.postDate}>{createdAt}</span>
          </div>
        </div>
        <p className={styles.postLikeCount}>
          <FaHeart color="red" />
          <span>42</span>
        </p>
      </div>

      {/* 글 내용 */}
      <article className={styles.postContent}>
        <MarkdownWithHighlight content={content} />
      </article>

      {/* comment box */}
      <section className={styles.commentSection}>
        <h4 className={styles.commentHeader}>
          댓글 {comments ? comments.length : 0}개
        </h4>
        <CommentList
          postId={id || ""}
          comments={comments ? comments : []}
        />
        {profile && (
          <CommentInput postId={id || ""} />
        )}
      </section>
    </main>
  );
};
