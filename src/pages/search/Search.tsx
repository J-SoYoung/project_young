import { Link, useLoaderData } from "react-router-dom";
import styles from "./search.module.css";

import { SearchBar } from "../../shared/components";
import { useEffect, useState } from "react";
import { Post } from "../../shared/types/posts";
import { getAllPosts, searchPosts } from "../../shared/apis/posts";
import { paths } from "../../routers/paths";

type LoaderData = { q: string };
export const Search = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const query = queryParams.get("q");

  const { q } = useLoaderData() as LoaderData;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = q ? await searchPosts(q) : await getAllPosts();
        setPosts(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [q]);

  return (
    <main>
      <h2 className={styles.searchMessage}>'{q}' 의 게시글 결과입니다.</h2>
      <SearchBar />
      <section>
        {loading ? (
          <p>검색중입니다</p>
        ) : posts.length === 0 ? (
          <p>검색결과가 없습니다</p>
        ) : (
          <>
            <h3 className={styles.subTitle}>{posts.length}개의 검색결과가 있습니다.</h3>
            <ul className={styles.list}>
              {posts.map((post) => {
                if (post.id) {
                  return (
                    <li key={post.id}>
                      <time>{post.createdAt}</time>
                      <p>
                        <Link to={paths.detail({ id: post.id })}>
                          {post.title}
                        </Link>
                      </p>
                    </li>
                  );
                }
              })}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};
