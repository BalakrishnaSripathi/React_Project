import {
  DndContext,          // 🔥 Main provider (context for drag system)
  closestCenter        // 🔥 Collision detection (how items detect drop position)
} from "@dnd-kit/core";

import {
  SortableContext,     // 🔥 Enables sorting behavior
  useSortable,         // 🔥 Hook → makes item draggable
  arrayMove,           // 🔥 Utility → reorder array
  verticalListSortingStrategy // 🔥 Strategy for vertical list
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";


// 🔹 Single Item Component
function SortableItem({ id }) {

  // 🔥 HOOK: useSortable
  // 👉 Makes this item draggable + sortable
  const {
    attributes,     // accessibility + drag attributes
    listeners,      // mouse/touch events
    setNodeRef,     // ref to connect DOM with dnd-kit
    transform,      // movement position (x, y)
    transition      // animation smoothness
  } = useSortable({ id });

  // 🔥 Convert transform object → CSS style
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}      // 🔥 Connect DOM to drag system
      style={style}
      {...attributes}       // 🔥 Required for accessibility
      {...listeners}        // 🔥 Enables dragging
      className="p-4 bg-white shadow rounded mb-2 cursor-grab active:cursor-grabbing border"
    >
      {id}
    </div>
  );
}


// 🔹 Main Component
export default function DndKitList() {

  // 🔥 HOOK: useState
  // 👉 Stores list order (VERY IMPORTANT)
  const [items, setItems] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]);

  return (
    <div className="max-w-md mx-auto mt-10">

      <h2 className="text-xl font-bold mb-4">Course Topics</h2>

      {/* 🔥 DndContext → REQUIRED ROOT */}
      <DndContext
        collisionDetection={closestCenter}

        // 🔥 EVENT: when drag ends
        onDragEnd={(event) => {
          const { active, over } = event;

          // 👉 active.id → dragged item
          // 👉 over.id → dropped position

          if (!over) return;

          if (active.id !== over.id) {
            setItems((prev) => {
              const oldIndex = prev.indexOf(active.id);
              const newIndex = prev.indexOf(over.id);

              // 🔥 arrayMove → reorder list
              return arrayMove(prev, oldIndex, newIndex);
            });
          }
        }}
      >

        {/* 🔥 SortableContext → enables sorting logic */}
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >

          {/* 🔥 Render Items */}
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}

        </SortableContext>
      </DndContext>
    </div>
  );
}