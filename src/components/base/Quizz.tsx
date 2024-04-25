import QuizzOption from './QuizzOption';

const Quizz = ({ options }) => {
  return (
    <div className="flex justify-center">
      <div className="h-max grid sm:w-screen sm:grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-lg p-4 mb-10">
        {options.map((option) => (
          <QuizzOption option={option} />
        ))}
      </div>
    </div>
  );
};

export default Quizz;
