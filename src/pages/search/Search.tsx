import { useLocation } from "react-router-dom";
export const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <div>
      <p>This is the Search page.</p>
      <p>{query}</p>
    </div>
  );
};