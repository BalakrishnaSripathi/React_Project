import { useEffect } from "react";

export function useAutoPlay(emblaApi, delay = 3000) {
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      // Check if we can move forward, otherwise reset to start
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, delay);

    // Cleanup to prevent memory leaks or multiple intervals
    return () => clearInterval(interval);
  }, [emblaApi, delay]);
}