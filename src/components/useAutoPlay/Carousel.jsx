import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useAutoPlay } from './useAutoPlay'; // Adjust path based on your folder structure

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useAutoPlay(emblaApi, 3000);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg" ref={emblaRef}>
        <div className="flex">
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] min-w-0 h-64 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
            <img className='w-fit h-full' src="https://picsum.photos/id/1/1200/400" alt="" />
          </div>
          {/* Slide 2 */}
          <div className="flex-[0_0_100%] min-w-0 h-64 flex items-center justify-center bg-emerald-500 text-white text-2xl font-bold">
            <img className='w-fit h-full' src="https://picsum.photos/id/7/1200/400" alt="" />
          </div>
          {/* Slide 3 */}
          <div className="flex-[0_0_100%] min-w-0 h-64 flex items-center justify-center bg-purple-500 text-white text-2xl font-bold">
            <img className='w-fit h-full' src="https://picsum.photos/id/4/1200/400" alt="" />
          </div>
        </div>
      </div>
      
      <p className="text-center mt-4 text-gray-500 text-sm">
        Autoplay is active (3s delay)
      </p>
    </div>
  );
};

export default Carousel;