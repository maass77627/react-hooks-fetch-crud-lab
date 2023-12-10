import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { useEffect } from "react";

function App() {
  console.log("component rendering")

  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState("")

  console.log(questions)
 
  function changeQuestionIndex(index, id) {
    const newQuestions = questions.map(question => {
      console.log(question)
     if (question.id == id) {
     return question.correctIndex == index
      //return {...question, index}
     } else {
      return question
     }
    })
    console.log(newQuestions)
    setQuestions(newQuestions)
    //changeQuestion.correctIndex == index

  }

  function deleteQuestion(id) {
    const newQuestions = questions.filter(question => question.id !== id)
    setQuestions(newQuestions)
  }
  
  
  useEffect(() => {
    console.log("useEffect running")
    fetch("http://localhost:4000/questions")
    .then((response)=> response.json())
    .then((data) => {
      const updatedList = data.filter((item) => item.id !== 7);
      setQuestions(updatedList)
     setQuestions(data)
    })
  }, [])
  console.log(questions)

  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList changeQuestionIndex={changeQuestionIndex} questions={questions} deleteQuestions={deleteQuestion}/>}
    </main>
  );
}

export default App;
