import DraggableCard from "./DraggableCard";

export default function DraggableHome() {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">
        🖐️ useGesture + Tailwind
      </h1>
      <p className="text-gray-600 mb-6">
        Drag the card anywhere on screen
      </p>

      <DraggableCard />
    </div>
  );
}