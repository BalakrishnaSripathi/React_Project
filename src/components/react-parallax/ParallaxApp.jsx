import { Parallax } from "react-parallax";

function ParallaxApp() {
  return (
    <div className="bg-gray-100">

      {/* Hero Parallax */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        strength={500}
      >
        <div className="h-[500px] flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white bg-black/50 px-6 py-4 rounded-lg">
            Explore The World 🌍
          </h1>
        </div>
      </Parallax>

      {/* What is react-parallax */}
      <section className="max-w-6xl mx-auto p-8">

        <div className="bg-white shadow rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            What is react-parallax?
          </h2>

          <p>
            react-parallax creates beautiful scrolling
            effects where the background moves slower
            than the foreground content.
          </p>
        </div>

        {/* Install */}
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-parallax
          </div>
        </div>

        {/* Uses */}
        <div className="bg-yellow-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Landing Pages</li>
            <li>Travel Websites</li>
            <li>Portfolio Websites</li>
            <li>Marketing Pages</li>
            <li>Product Showcases</li>
            <li>Hero Sections</li>
          </ul>
        </div>

      </section>

      {/* Second Parallax Section */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1519608487953-e999c86e7455"
        strength={300}
      >
        <div className="h-[400px] flex items-center justify-center">
          <div className="bg-white/80 p-8 rounded-xl">
            <h2 className="text-4xl font-bold">
              Adventure Awaits ✈️
            </h2>
          </div>
        </div>
      </Parallax>

      {/* Content */}
      <section className="max-w-6xl mx-auto p-8">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-3xl font-bold mb-4">
            Why Use Parallax?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Modern UI Experience</li>
            <li>Interactive Scrolling</li>
            <li>Improved Visual Appeal</li>
            <li>Better User Engagement</li>
            <li>Professional Landing Pages</li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default ParallaxApp;