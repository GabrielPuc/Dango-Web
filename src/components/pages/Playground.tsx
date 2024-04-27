import FlippableCard from '../base/FlippableCard';
import Quizz from '../base/Quiz';

function Playground() {
  return (
    <>
      <FlippableCard front={'Front'} back={'Back'}></FlippableCard>
      <Quizz
        options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        answerIndex={1}
      ></Quizz>
    </>
  );
}

export default Playground;
