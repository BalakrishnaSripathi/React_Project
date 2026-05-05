import React, { useRef } from "react";
import { useGesture } from "@use-gesture/react";

export default function DraggableCard() {
  const cardRef = useRef(null);

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        cardRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
    },
    {
      target: cardRef,
      drag: { from: () => [0, 0] },
    }
  );

  return (
    <div
      ref={cardRef}
      className="absolute top-40 left-20 w-72 p-5 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing select-none touch-none"
    >
      <h2 className="text-xl font-semibold">🎴 Draggable Card</h2>
      <p className="text-gray-500 mt-2">
        Built using useGesture + Tailwind CSS
      </p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Button
      </button>
    </div>
  );
}