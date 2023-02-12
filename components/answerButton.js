var he = require("he");
export function AnswersButton({
  answer,
  index,
  setSelectedAnswer,
  selectedAnswer,
}) {
  return (
    <button
      type="button"
      className={`${
        selectedAnswer === index
          ? "border-green-300 bg-green-600 font-bold text-white"
          : "border-gray-300 bg-white text-gray-700"
      } inline-flex items-center justify-center rounded-md border px-6 py-3 text-base font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
      onClick={() => {
        setSelectedAnswer(index);
      }}
    >
      {he.decode(answer)}
    </button>
  );
}
