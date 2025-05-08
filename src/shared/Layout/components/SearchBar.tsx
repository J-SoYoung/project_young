import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/searchBar.module.css";
import { IoSearch } from "react-icons/io5";
import { useDeviceType } from "../hooks/useDeviceType";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const { isMobile } = useDeviceType();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
    console.log("Searching for:", query);
    setQuery("");
  };
  
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        placeholder="검색어를 입력하세요"
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isMobile ? (
        <button
          type="button"
          className={styles.searchButtonMobile}
          onClick={() => navigate("/search")}
          aria-label="모바일 검색"
        >
          <IoSearch className={styles.icon} />
        </button>
      ) : (
        <button type="submit" className={styles.searchButton} aria-label="검색">
          <IoSearch className={styles.icon} />
        </button>
      )}
    </form>
  );
};
