import { motion } from 'framer-motion';

const QuizOption = ({
  index,
  option,
  selectedIndex,
  answerIndex,
  handleClick,
}) => {
  const isSelected = selectedIndex === index;
  const isCorrect = index === answerIndex;

  let backgroundColor = '#133952';

  if (selectedIndex != null) {
    if (isCorrect) {
      backgroundColor = '#7B9D45';
    } else if (isSelected) {
      backgroundColor = '#8D0A0A';
    }
  }

  return (
    <motion.button
      animate={{
        backgroundColor: backgroundColor,
      }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className={`rounded overflow-hidden shadow-lg px-8 py-6 font-bold text-xl mb-2 text-white text-center uppercase cursor-pointer ${selectedIndex != null && 'pointer-events-none'}`}
    >
      {option}
    </motion.button>
  );
};

export default QuizOption;
