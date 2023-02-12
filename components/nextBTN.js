import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
export function NextButton({
  selectedAnswer,
  setSelectedAnswer,
  setNextClicked,
}) {
  return (
    <button
      type="button"
      disabled={selectedAnswer === null}
      className={`inline-flex items-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-20`}
      onClick={() => {
        //check if an answer is chosen -- done
        //check if it is the correct answer -- done
        //if correct increase score
        // console.log(
        //   question.incorrect_answers[selectedAnswer] ===
        //     question.correct_answer
        // );
        //make selecte answer null
        setSelectedAnswer(null);
        setNextClicked(true);
        // setQuestion(null);
        // //fetch next question
      }}
    >
      Next Question
      <ArrowSmallRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
    </button>
  );
}
