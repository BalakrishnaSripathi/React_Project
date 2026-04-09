import { useRef } from "react";
import gsap from "gsap";

export default function GsapFly() {
  const boxRef = useRef();

  const handleHover = () => {
    const margin = 550; // 👈 distance from right edge
    const maxX = window.innerWidth / 1.5 - margin;// only right side
    const maxY = window.innerHeight;

    gsap.to(boxRef.current, {
      x: Math.random() * maxX - maxX / 2,  
      y: Math.random() * maxY - maxY / 2,
      rotate: Math.random() * 720,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex justify-end items-center h-screen overflow-hidden pr-5">
      <img
        ref={boxRef}
        onMouseEnter={handleHover}
        src="https://pngimg.com/uploads/fly/fly_PNG3971.png"
        className="w-[200px] h-[200px] cursor-pointer mr-5"
      />
    </div>
  );
}