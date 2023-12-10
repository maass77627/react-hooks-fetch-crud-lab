import React from "react";

function QuestionItem({ question, deleteQuestion, changeQuestionIndex }) {
  console.log("component rendering")
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    deleteQuestion(id)
  }

  function handleChange(e) {
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"correctIndex": e.target.value}) 
  })
  .then(response => response.json())
  .then(data => changeQuestionIndex(data.correctIndex, data.id))
  }

  //"correctIndex": integer

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <h3>1. {answers[0]}</h3>
      <h3>2. {answers[1]}</h3>
      <h3>3. {answers[2]}</h3>
      <h3>4. {answers[3]}</h3>
      <label>
        Correct Answer:
        <select onChange={(e) => handleChange(e)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
