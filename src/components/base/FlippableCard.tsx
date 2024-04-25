import { useState } from 'react';
import { motion } from 'framer-motion';

const FlippableCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flip-card w-[400px] h-[400px]" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner text-white w-[100%] h-[100%] rounded-md"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front w-[100%] h-[100%] bg-[#292929] flex justify-center items-center rounded-lg">
          {front}
        </div>
        <div className="flip-card-back w-[100%] h-[100%] bg-[#292929] flex justify-center items-center rounded-lg">
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default FlippableCard;
