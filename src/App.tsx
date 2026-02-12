import { useState } from 'react'
import './App.css'
import quizQuestions from './components/quizQuestions';'./components/quizQuestions'

function App() {
  const [count, setCount] = useState(0);
  const [currentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  console.log(currentQuestion);

  return (
    <>
      <div className='container'>
        <div className='row'>
            <h5>Quiz App</h5>
            <div className="text-start">
              <h4>{currentQuestion.question}</h4>
            </div>
          </div>
            {currentQuestion.options.map((option, index) => {
              return (
                  <div className="border p-3" key={index}>
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
          {/* </div> */}
      </div>
    </>
  )
}

export default App
