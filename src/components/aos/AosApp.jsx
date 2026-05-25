import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

function AosApp() {

  // Initialize AOS
  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: false,
    });

  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5">

        <h1
          data-aos="fade-down"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          AOS + Tailwind CSS
        </h1>

        <p
          data-aos="fade-up"
          className="text-lg md:text-2xl text-gray-600 max-w-2xl"
        >
          Beautiful scroll animations using AOS library
          with modern Tailwind CSS design.
        </p>

      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-5 py-20">

        <h2
          data-aos="zoom-in"
          className="text-4xl font-bold text-center mb-16"
        >
          Animation Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div
            data-aos="fade-right"
            className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              Fade Right
            </h3>

            <p className="text-gray-600">
              This card comes from left side while scrolling.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            className="bg-blue-500 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              Fade Up
            </h3>

            <p>
              This card animates from bottom to top.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-left"
            className="bg-green-500 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              Fade Left
            </h3>

            <p>
              This card comes from right side.
            </p>
          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-24 px-5">

        <div className="max-w-5xl mx-auto text-center">

          <h2
            data-aos="flip-up"
            className="text-5xl font-bold mb-10"
          >
            Why Use AOS?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div
              data-aos="zoom-in"
              className="bg-gray-900 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                Easy to Use
              </h3>

              <p className="text-gray-300">
                Just add data-aos attribute and animation works.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-gray-900 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                Professional UI
              </h3>

              <p className="text-gray-300">
                Makes websites modern and interactive.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer
        data-aos="fade-up"
        className="text-center py-10 bg-white"
      >
        <p className="text-gray-600">
          React + Tailwind CSS + AOS
        </p>
      </footer>

    </div>
  );
}

export default AosApp;