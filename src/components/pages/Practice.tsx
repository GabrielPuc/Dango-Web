import Quizz from '../base/Quiz';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getPendingSelector,
  getErrorSelector,
  getGroupMergedSelector,
} from '../../store/selectors';
import {
  getRandomNumberFromRange,
  getRandomItemswithoutRepeat,
} from '../../utils/PracticeUtils';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FlippableCard from '../base/FlippableCard';

function Practice() {
  const params = useParams();
  const pending = useSelector(getPendingSelector);
  const words = useSelector(getGroupMergedSelector(params.content));
  const error = useSelector(getErrorSelector);
  const [currentOptions, setCurrentOptions] = useState(words);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState({
    pronunciation: '',
    meaning: '',
    symbol: '',
    group: '',
  });

  const [repeatBuffer, setRepeatBuffer] = useState([]);

  useEffect(() => {
    nextSymbol();
  }, []);

  function nextSymbol() {
    repeatBuffer.push(currentAnswer);
    if (repeatBuffer.length >= 6) {
      setRepeatBuffer(repeatBuffer.slice(1));
    }
    const options = getRandomItemswithoutRepeat(words, 4, repeatBuffer);
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
              front={
                <div>
                  <p className="mb-6">{currentAnswer.symbol}</p>
                  {currentAnswer.symbol != currentAnswer.pronunciation ? (
                    <p className="text-7xl mb-6">
                      {currentAnswer.pronunciation}
                    </p>
                  ) : (
                    <p></p>
                  )}
                  <p className="text-4xl text-pinkBright">
                    {currentAnswer.group}
                  </p>
                </div>
              }
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
