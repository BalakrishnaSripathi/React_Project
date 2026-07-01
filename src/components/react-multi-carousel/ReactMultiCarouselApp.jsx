import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ReactMultiCarouselApp() {
  const [courses] = useState([
    {
      id: 1,
      title: "React JS",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      price: "$49",
    },
    {
      id: 2,
      title: "Node JS",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
      price: "$59",
    },
    {
      id: 3,
      title: "Python",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500",
      price: "$39",
    },
    {
      id: 4,
      title: "Java",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500",
      price: "$45",
    },
    {
      id: 5,
      title: "Spring Boot",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      price: "$69",
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Multi Carousel Demo
        </h1>

        {/* What is react-multi-carousel */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is react-multi-carousel?
          </h2>

          <p>
            A React library for building responsive
            multi-item carousels with touch support.
          </p>
        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Installation
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-multi-carousel
          </div>
        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Product Sliders</li>
            <li>Course Cards</li>
            <li>Testimonials</li>
            <li>News Articles</li>
            <li>Travel Destinations</li>
          </ul>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows
          draggable
          swipeable
          showDots
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-xl shadow-md mx-2 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-blue-600 font-semibold mt-2">
                  {course.price}
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>

      </div>

    </div>
  );
}

export default ReactMultiCarouselApp;