import { useState, useEffect } from "react";
import { AnswersButton } from "./answerButton";
import { Question } from "./question";
import { NextButton } from "./nextBTN";
export function Trivia() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [nextClicked, setNextClicked] = useState(false);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((data) => {
        let questionObject = data.results[0];
        const NumberOfPossibleAnswers = questionObject.incorrect_answers.length;
        const CAindex = Math.floor(Math.random() * NumberOfPossibleAnswers);
        questionObject.incorrect_answers.splice(
          CAindex,
          0,
          questionObject.correct_answer
        );
        setQuestion(questionObject);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="-mt-32 mb-4">
      <header className="py-10">
        <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Trivia Game
          </h1>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {`score: ${score}`}
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          {question !== null ? <Question question={question} /> : null}
        </div>
      </div>
      {question !== null ? (
        <div className="flex w-full flex-col justify-evenly gap-1 px-4 md:flex-row">
          {question.incorrect_answers.map((answer, index) => {
            return (
              <AnswersButton
                answer={answer}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      ) : null}
      <div className="flex w-full justify-center pt-8">
        <NextButton
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          setNextClicked={setNextClicked}
        />
      </div>
    </main>
  );
}
