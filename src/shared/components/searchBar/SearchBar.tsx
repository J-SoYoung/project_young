import { FcSearch } from "react-icons/fc";
import styles from "./searchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../routers/paths";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    if (q.length === 0) {
      navigate(paths.search());
    } else {
      navigate(paths.search({ q: q }));
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        name="q"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
        className={styles.searchInput}
        aria-label="검색어"
      />
      <button type="submit" className={styles.searchButton} aria-label="검색">
        <FcSearch size={28} className={styles.searchButtonIcon} />
      </button>
    </form>
  );
};
