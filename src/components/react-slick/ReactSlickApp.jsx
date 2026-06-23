import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactSlickApp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const courses = [
    {
      id: 1,
      title: "React JS",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 2,
      title: "Node JS",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      id: 3,
      title: "Java",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 4,
      title: "Python",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    },
    {
      id: 5,
      title: "Spring Boot",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Slick Demo
        </h1>

        {/* What is React Slick */}
        <div className="bg-blue-50 p-6 rounded-xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-slick?
          </h2>

          <p>
            A React library used to create
            responsive sliders and carousels.
          </p>

        </div>

        {/* Install */}
        <div className="bg-green-50 p-6 rounded-xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Installation
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-slick slick-carousel
          </div>

        </div>

        {/* Use Cases */}
        <div className="bg-yellow-50 p-6 rounded-xl mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Product Sliders</li>
            <li>Course Showcases</li>
            <li>Testimonials</li>
            <li>Image Galleries</li>
            <li>Landing Pages</li>
          </ul>

        </div>

        {/* Slider */}
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="px-3">

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="text-xl font-bold">
                    {course.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}
        </Slider>

      </div>

    </div>
  );
}

export default ReactSlickApp;