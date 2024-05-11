import QuizOption from '../blocks/QuizOption';
import { useState } from 'react';

const Quiz = ({ options, answerIndex, callback }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedIndex == null) {
      setSelectedIndex(index);
    }
    delayCallback();
  };

  async function delayCallback() {
    await sleep(1000);
    callback();
    setSelectedIndex(null);
  }

  async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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
