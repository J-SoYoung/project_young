export const Header = () => {
  return (
    <header className="w-full p-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">PROJECT YOUNG</h1>
      <nav className="flex flex-wrap gap-2">
        {[
          "GAMY",
          "EMPOWER",
          "STRENGTH DESIGN 201",
          "GAMY",
          "INSPIRE",
          "STRENGTH DESIGN 301"
        ].map((tag, idx) => (
          <button
            key={idx}
            className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-900"
          >
            {tag}
          </button>
        ))}
      </nav>
    </header>
  );
};
