import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { LuPencil } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";

import styles from "./styles/detail.module.css";
import { CommentInput, CommentList } from "./components";

import { getPostById } from "../../shared/apis/posts";
import { Post, CommentType } from "../../shared/types/posts";
import { useAuth } from "../../shared/hooks/useAuth";

export const Detail = () => {
  const navigate = useNavigate();
  const { category, id } = useParams<string>();
  const { profile } = useAuth();
  const isOwner = profile?.userId === import.meta.env.VITE_BLOG_OWNER_UID;

  const [post, setPost] = useState<Omit<Post, "comments"> | null>(null);
  const [commentLists, setCommentLists] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!category || !id) return alert("포스트를 찾을 수 없습니다");
      const postWithComments = await getPostById(category, id);
      if (!postWithComments) {
        setPost(null);
        setCommentLists([]);
        setLoading(false);
        return;
      }
      const { comments = [], ...postData } = postWithComments;
      setPost(postData); // Omit<Post, "comments">
      setCommentLists(comments); // CommentType[]
      setLoading(false);
    };
    fetchData();
  }, [category, id]);

  if (loading) return <p> 로딩중 ... </p>;
  if (!post) return <p>포스트를 찾을 수 없습니다</p>;

  const { title, author, authorProfile, date, content } = post;

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.postTitleBox}>
        <h1>{title}</h1>
        {isOwner && (
          <LuPencil
            size={20}
            className={styles.icons}
            onClick={() => {
              navigate(`/edit/${category}/${id}`);
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
            <span className={styles.postDate}>{date}</span>
            {/* 예시 날짜 형식 Today at 11:37 AM */}
          </div>
        </div>
        <p className={styles.postLikeCount}>
          {/* <FaRegHeart color="red" /> */}
          <FaHeart color="red" />
          <span>42</span>
        </p>
      </div>

      {/* 글 내용 */}
      <article
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* comment box */}
      <section className={styles.commentSection}>
        <h4 className={styles.commentHeader}>
          댓글 {commentLists ? commentLists.length : 0}개
        </h4>
        <CommentList
          postId={id || ""}
          comments={commentLists ? commentLists : []}
          setCommentLists={setCommentLists}
        />
        {profile && (
          <CommentInput postId={id} setCommentLists={setCommentLists} />
        )}
      </section>
    </main>
  );
};
