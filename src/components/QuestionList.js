import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestions, changeQuestionIndex }) {
  console.log("component rendering")
  console.log(questions)
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions ? questions.map((question) => (<QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestions} changeQuestionIndex={changeQuestionIndex}/>)) : null}
        </ul>
    </section>
  );
}

export default QuestionList;
