import React from "react";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperApp = () => {
  const images = [
    "https://picsum.photos/id/1015/900/400",
    "https://picsum.photos/id/1016/900/400",
    "https://picsum.photos/id/1018/900/400",
    "https://picsum.photos/id/1020/900/400",
  ];

  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        React Swiper Example
      </h1>

      <Swiper
        // Modules
        modules={[Navigation, Pagination, Autoplay]}

        // Slider Settings
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Explanation Section */}
      <div style={{ marginTop: "40px" }}>
        <h2>Why Use Swiper?</h2>

        <ul>
          <li>Smooth and responsive slider</li>
          <li>Touch support for mobile devices</li>
          <li>Easy autoplay and navigation</li>
          <li>Used in real-world production apps</li>
          <li>Best for banners, products, galleries</li>
        </ul>

        <h2>Where It Is Used?</h2>

        <ul>
          <li>E-commerce product sliders</li>
          <li>Netflix-style movie sections</li>
          <li>Portfolio websites</li>
          <li>Testimonials sliders</li>
          <li>Course showcase sections</li>
        </ul>

        <h2>Install Command</h2>

        <pre
          style={{
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
{`npm install swiper`}
        </pre>
      </div>
    </div>
  );
};

export default SwiperApp;