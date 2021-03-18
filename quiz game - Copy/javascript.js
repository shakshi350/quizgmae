const startButton = document.getElementById('start-btn')
const questionContainerElement = dounment.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = dounment.getElementById
('answerButtons')

let shuffledQuestion,currentquestionIndex
startButton.addEventListener('click',startGame)


function startGame(){
  console.log('started')
  startButton.classList.add('hide')
  shuffledQuestion = question.sort(()) => Math.random() - .5)
  currentquestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
}
function selectAnswer(question){


}



const question ={
  {
    quqestion: 'what is 2+2',
    answer:[
      {text:'4', correct:true},
      {text: '22',correct:false}
    ]
  }
}
