import QuizOption from './QuizOption';
import { useState } from 'react';

const Quiz = ({ options, answerIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedIndex == null) {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="h-max grid w-full sm:grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-lg p-4 mb-10">
        {options.map((option, index) => (
          <QuizOption
            key={index}
            index={index}
            handleClick={() => handleOptionClick(index)}
            selectedIndex={selectedIndex}
            answerIndex={answerIndex}
            option={option}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
