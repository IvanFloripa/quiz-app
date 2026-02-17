import { useEffect, useState } from 'react'
import './App.css'
import quizQuestions from './components/quizQuestions';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [questionResponse, setQuestionResponse] = useState<
    { question: number; answer: number, isCorrect: boolean }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length;
  //Total Count Final Result
  const totalCorrect = questionResponse.filter(q => q.isCorrect).length;
  const totalQuestions = quizQuestions.length;
  const percentage = totalQuestions == 0 
  ? 0
  : Math.round((totalCorrect/totalQuestions) * 100);

  useEffect(() => {
      console.log("Array Respostas", questionResponse);
      
  },[questionResponse]);
  

  function selectQuestion(index: number) {
    setSelectedIndex(index);
  }

  function handleSend() {
    console.log("Resposta Selecionada");
    console.log(selectedIndex);
    console.log(currentQuestionIndex);

    setQuestionResponse(prev => [
      ...prev,
      {
        question: currentQuestionIndex, 
        answer:selectedIndex, 
        isCorrect: selectedIndex === quizQuestions[currentQuestionIndex].correctAnswer
      }
    ]);

    setCurrentQuestionIndex(prev => prev +1);
  }

  return (
    <>
      <div className='container'>
        {!isLastQuestion ? (
          <>
            <div className='row'>
              <h5>Quiz App</h5>
              <div className="text-start">
                <h4>{currentQuestion.question}</h4>
              </div>
            </div>
            {currentQuestion.options.map((option, index) => {
              return (
                  <div className={`border p-3 mb-3 ${selectedIndex === index ? "bg-blue text-white" : ""}`}
                    key={index} 
                    onClick={() =>selectQuestion(index)}>
                    <div className="row align-items-center text-start">
                        <div className="col-2">
                          <h5 className="mb-0">{index + 1} - </h5>
                        </div>
                        <div className="col-10">
                          <h5 className="mb-0">{option}</h5>
                        </div>
                    </div>
                  </div>
              )
            })}
            <div className='btn-send'>
              <button className='btn btn-primary' 
              onClick={() => handleSend()}>Send</button>
            </div>
          </>
        ) : (
          <div className='row mb-3'>
              <div className="text-center my-4">
                <h3>Quiz Finalizado 🎉</h3>
                <h4>Total de acertos: {totalCorrect}/{totalQuestions}</h4>
                <h4>Percentual de Acertos: {percentage}%</h4>
                <h4>Respostas inseridas</h4>
              </div>
              {questionResponse.map((question, index) =>{
                return (
                  <div className="col-3" key={index}>
                      <div className='d-flex flex-column'>
                        <h4 className='mb-3 fw-bold'>Questão: {index +1}</h4>
                        <h4>Resposta: {
                            question.answer == quizQuestions[index].correctAnswer ? "Correta" : "Incorreta"
                        }</h4>
                      </div>
                  </div>
                )
              })}

          </div>
        )}
      </div>
    </>
  )
}

export default App
