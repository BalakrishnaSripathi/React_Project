import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const FadeCard = () => {
  const { ref, inView } =
    useInView({
      threshold: 0.3,
      triggerOnce: true,
    });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-xl bg-white p-6 shadow"
    >
      Scroll Animation
    </motion.div>
  );
};

export default FadeCard;