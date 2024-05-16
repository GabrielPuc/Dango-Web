import { useState } from 'react';
import { motion } from 'framer-motion';

const FlippableCard = ({ front, back, isActive = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="flip-card h-full w-full max-w-screen-md justify-center flex"
      onClick={isActive ? handleFlip : () => {}}
    >
      <motion.div
        className="flip-card-inner text-white text-9xl w-4/5 h-full rounded-md"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <label className="flip-card-front w-full h-full bg-dark flex justify-center items-center rounded-lg overflow-visible">
          {front}
        </label>
        <label className="flip-card-back w-full h-full bg-dark flex justify-center items-center rounded-lg overflow-visible">
          {back}
        </label>
      </motion.div>
    </div>
  );
};

export default FlippableCard;
