import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% of the element must be visible
    triggerOnce: true, // only trigger once
  });

  return (
    <div ref={ref} style={{ height: "300px", margin: "50px 0" }}>
      {inView ? (
        <img
          src="https://via.placeholder.com/400"
          alt="Lazy loaded example"
          width="400"
        />
      ) : (
        <p>Scroll down to load image...</p>
      )}
    </div>
  );
};

export default LazyImage;
