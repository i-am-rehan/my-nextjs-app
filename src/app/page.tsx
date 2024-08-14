// src/app/page.tsx
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-8">
          Delivering outstanding digital solutions with Next.js and Tailwind
          CSS.
        </p>
        <a
          href="/services"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Explore Our Services
        </a>
      </section>

      {/* Features Section */}
      <section className="flex-grow p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Feature One
              </h3>
              <p className="text-gray-600">
                Description of the first feature goes here. Highlight what makes
                it valuable to users.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Feature Two
              </h3>
              <p className="text-gray-600">
                Description of the second feature goes here. Emphasize its
                benefits and use cases.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Feature Three
              </h3>
              <p className="text-gray-600">
                Description of the third feature goes here. Share how it stands
                out from the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; 2024 My Next.js App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
