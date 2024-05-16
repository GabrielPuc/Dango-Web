import Quizz from '../base/Quiz';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getVerbsSelector,
  getVerbsPendingSelector,
  getVerbsErrorSelector,
  getVerbsMergedSelector,
} from '../../store/selectors';
import {
  getRandomNumberFromRange,
  getRandomItems,
  getRandomItemswithoutRepeat,
} from '../../utils/PracticeUtils';
import { useState } from 'react';
import FlippableCard from '../base/FlippableCard';

function Practice() {
  const pending = useSelector(getVerbsPendingSelector);
  const verbGroups = useSelector(getVerbsMergedSelector);
  const error = useSelector(getVerbsErrorSelector);
  const [currentOptions, setCurrentOptions] = useState(verbGroups);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState({
    pronunciation: '',
    meaning: '',
  });

  const [repeatBuffer, setRepeatBuffer] = useState([]);

  useEffect(() => {
    nextSymbol();
  }, []);

  function nextSymbol() {
    repeatBuffer.push(currentAnswer);
    if (repeatBuffer.length >= 10) {
      setRepeatBuffer(repeatBuffer.shift());
    }
    const options = getRandomItemswithoutRepeat(verbGroups, 4, repeatBuffer);
    const answerIndex = getRandomNumberFromRange(0, 3);
    setCurrentOptions(options);
    setCurrentAnswerIndex(answerIndex);
    setCurrentAnswer(options[answerIndex]);
  }

  return (
    <div className="justify-center text-center text-5xl text-gray-300 h-full w-full text-4xl text-greenBright">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="w-full h-screen">
          <div className="justify-center flex pt-4 w-auto h-1/2">
            <FlippableCard
              front={currentAnswer.pronunciation}
              back={currentAnswer.meaning}
              isActive={false}
            />
          </div>
          <Quizz
            options={currentOptions}
            answerIndex={currentAnswerIndex}
            callback={nextSymbol}
          ></Quizz>
        </div>
      )}
    </div>
  );
}

export default Practice;
