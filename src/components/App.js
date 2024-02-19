import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion){
    const updatedQuestions = [...questions, newQuestion]
    setQuestions(updatedQuestions)
  }

  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function handleUpdateQuestion(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if( updatedQuestion.id === question.id){
        return(
          updatedQuestion
        )
      }else{
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddQuestion={handleAddQuestion} /> 
      : <QuestionList 
      questions={questions} 
      setQuestions={setQuestions} 
      onDeleteQuestion={handleDeleteQuestion} 
      onUpdateQuestion={handleUpdateQuestion}
      />
      }
    </main>
  );
}

export default App;
