var he = require("he");
export function Question({ question }) {
  return (
    <div className="h-[10rem] divide-y-4 overflow-y-scroll rounded-lg border-4 border-dashed border-gray-200">
      <div className="flex w-full justify-between py-2 px-4 md:px-8">
        <p>{question.category}</p>
        <p className={difficultyColor(question.difficulty)}>
          {question.difficulty}
        </p>
      </div>
      <div className="flex items-center justify-center py-4">
        <p className="px-8">{he.decode(question.question)}</p>
      </div>
    </div>
  );
}
function difficultyColor(difficulty) {
  var css = "";
  switch (difficulty) {
    case "easy":
      css = "text-green-500";
      break;
    case "medium":
      css = "text-blue-500";
      break;
    case "hard":
      css = "text-red-500";
      break;
    default:
      css = "text-gray-500";
      break;
  }
  return css;
}
