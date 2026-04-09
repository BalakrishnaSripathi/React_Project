import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const GsapApp = () => {
  const containerRef = useRef();

  const boxRef = useRef();
  const boxRef1 = useRef();

  const circleRef = useRef();
  const circleRef1 = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 🔵 Circles drop animation
    tl.from([circleRef.current, circleRef1.current], {
      y: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

    // 🟥 Boxes pop + rotate
    tl.from(
      [boxRef.current, boxRef1.current],
      {
        scale: 0,
        rotate: 180,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      },
      "-=0.5"
    );

    // 🔄 Continuous floating effect
    gsap.to([circleRef.current, circleRef1.current], {
      y: "+=30",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });

    gsap.to([boxRef.current, boxRef1.current], {
      rotate: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  });

  // 🎯 Hover random movement
  const randomMove = (el) => {
    gsap.to(el, {
      x: gsap.utils.random(-150, 150),
      y: gsap.utils.random(-150, 150),
      rotate: gsap.utils.random(0, 360),
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center min-h-screen bg-black"
    >
      <div className="grid grid-cols-2 gap-6 p-10 rounded-3xl bg-gray-900 shadow-2xl">
        
        {/* Circle 1 */}
        <div
          ref={circleRef}
          onMouseEnter={(e) => randomMove(e.currentTarget)}
          className="h-[200px] w-[200px] rounded-full bg-gradient-to-br from-blue-300 to-teal-500 cursor-pointer"
        />

        {/* Circle 2 */}
        <div
          ref={circleRef1}
          onMouseEnter={(e) => randomMove(e.currentTarget)}
          className="h-[200px] w-[200px] rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 cursor-pointer"
        />

        {/* Box 1 */}
        <div
          ref={boxRef}
          onMouseEnter={(e) => randomMove(e.currentTarget)}
          className="h-[200px] w-[200px] rounded-xl bg-gradient-to-br from-pink-500 to-red-700 cursor-pointer"
        />

        {/* Box 2 */}
        <div
          ref={boxRef1}
          onMouseEnter={(e) => randomMove(e.currentTarget)}
          className="h-[200px] w-[200px] rounded-xl bg-gradient-to-br from-yellow-400 to-orange-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GsapApp;