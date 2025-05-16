import { useLocation } from "react-router-dom";
import { PostLists } from "../../shared/components";
import styles from "./search.module.css";

export const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <>
      <div className={styles.searchMessage}>
        <h2>'{query}' 의 게시글 결과입니다.</h2>
        <p>총 10개의 게시글이 검색되었습니다</p>
      </div>
      <PostLists />
    </>
  );
};
