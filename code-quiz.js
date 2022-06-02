const strtButton = document.getElementById('start-quiz')
const nxtButton = document.getElementById('next-question')
const quizContainerEl = document.getElementById('questions-container')
const questionEl = document.getElementById('question')
const btnChoiceEl = document.getElementById('answer-options')

    //math.random is set to -.5 so that it's less than 0 or above 0 50% of the time

// const timer = document.createElement('div');
// let time = 100;
// timerEl.textContent = 0;

// function countdown(time){
//     timerEl.textContent = time;
//     time--;
//     countdownu(time);
// }, 1000)
// }
let randomizer, displayedQuestions

strtButton.addEventListener('click',strtGame)

nxtButton.addEventListener('click',() => {
    displayedQuestions++
    nxtQuestion()
})

function strtGame() {    
    strtButton.classList.add('hide')
     randomizer = quizQuestions.sort(() => Math.random() - .5)   
     displayedQuestions = 0;  
     quizContainerEl.classList.remove('hide')
     nxtQuestion()
}

//start at 0 because we're starting at the fist question

function nxtQuestion ()  {
    quizReset()
    displayQuestion(randomizer[displayedQuestions])
}

function displayQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button') 
     button.innerText = answer.text
     button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
 }
    button.addEventListener('click', chooseAnswer)   
    btnChoiceEl.appendChild(button)
              
})
}

function quizReset() {   
    clearStatus(document.body)
    nxtButton.classList.add('hide')
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild)      
    }        
}

    // displayQuestion(randomizer[displayedQuestions])
    


function chooseAnswer(e) {
  const  clickedTarget = e.target
  const correct = clickedTarget.dataset.correct
  setStatusClass(document.body, correct)
    Array.from(btnChoiceEl.children).forEach(shownAnswrButtons => {
        setStatusClass(shownAnswrButtons, shownAnswrButtons.dataset.correct)
    })
if (randomizer.length > displayedQuestions + 1) {
    } else {
        strtButton.innerText = 'Try Again'    
    }
}
function setStatusClass(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('You got it!')
    } else {
        element.classList.add('Nope, sorry...')
    }
} 

function clearStatus(element) {
    element.classList.remove('You got it!')
    element.classList.remove('Nope, sorry...')
}
const quizQuestions = [
    {
      question: 'What is over 9000??',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    }
]


