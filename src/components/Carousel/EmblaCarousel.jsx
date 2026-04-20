import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1/1200/400",
    "https://picsum.photos/id/2/1200/400",
    "https://picsum.photos/id/3/1200/400",
     "https://picsum.photos/id/4/1200/400",
    "https://picsum.photos/id/5/1200/400",
    "https://picsum.photos/id/6/1200/400",
    "https://picsum.photos/id/7/1200/400",
    "https://picsum.photos/id/8/1200/400",
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="mt-3 w-full max-w-4xl mx-auto relative">
      
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div className="flex-[0_0_100%]" key={i}>
              <img
                src={img}
                alt=""
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Animated Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`relative overflow-hidden rounded-2 transition-all duration-300 ${
              i === selectedIndex
                ? "w-8 h-3 bg-gray-300"
                : "w-3 h-3 bg-gray-400"
            }`}
          >
            {/* progress fill */}
            {i === selectedIndex && (
              <span className="absolute left-0 top-0 h-full bg-white animate-progress" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}