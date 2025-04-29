import { Footer } from "./shared/Layout/Footer";
import { Header } from "./shared/Layout/Header";
import { Sidebar } from "./shared/Layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1e7d4] text-gray-800">
      <Header />
      {/* Main Content */}
      <div className="flex flex-1 w-full max-w-7xl mx-auto px-4 gap-6">
        <main className="flex-1 py-8">
          {[1, 2, 3, 4].map((item) => (
            <article
              key={item}
              className="flex flex-col md:flex-row gap-4 mb-8 border-b pb-6"
            >
              <img
                src="https://placehold.co/150"
                alt="thumbnail"
                className="w-full md:w-40 h-40 object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
            </article>
          ))}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
