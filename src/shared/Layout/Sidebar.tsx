import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-80 py-8">
      <div className="mb-8">
        <img
          src="https://placehold.co/400x300"
          alt="sidebar img"
          className="w-full h-auto"
        />
      </div>

      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full border px-3 py-2 rounded"
        />
      </section>

      <nav>
        <h3 className="text-lg font-semibold mb-2">Menu</h3>
        <ul className="space-y-2">
          <li>
            <Link to={"/list/memo"}>MEMO</Link>
          </li>
          <li>
            <Link to={"/list/achiving"}>ACHIVING</Link>
          </li>
          <li>
            <Link to={"/list/study"}>STUDY</Link>
          </li>
          <li>
            <Link to={"/list/book"}>BOOK</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
