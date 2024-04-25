const QuizzOption = ({ option }) => {
  return (
    <button className="bg-[#133952] rounded overflow-hidden shadow-lg px-8 py-6 font-bold text-xl mb-2 text-white text-center uppercase">
      {option}
    </button>
  );
};

export default QuizzOption;
