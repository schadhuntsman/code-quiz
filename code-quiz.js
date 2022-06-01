var btnChoiceEl = document.getElementById('button-choices')
var quizContainerEl = document.getElementById('questions-container')
var questionEl = document.getElementById('question')
var quizOptions = document.getElementById('answer-options')
var strtButton = document.getElementById('start-quiz');

var nxtButton = document.getElementById('next-button')

    //math.random is set to -.5 so that it's less than 0 or above 0 50% of the time
let randomizer, displayedQuestions
// const timer = document.createElement('div');
// let time = 100;
// timerEl.textContent = 0;

// function countdown(time){
//     timerEl.textContent = time;
//     time--;
//     countdownu(time);
// }, 1000)
// }
strtButton.addEventListener('click',strtGame)

function strtGame() {
    
    displayedQuestions = 0;
    
    var randomizer = quizQuestions.sort(() => Math.random() - .5)
    nxtButton.addEventListener('click',() => {
    displayedQuestions++,
    nxtQuestion()
})

//start at 0 because we're starting at the fist question

function nxtQuestion ()  {
    quizReset()
    displayQuestion(randomizer[displayedQuestions])
}

function displayQuestion(question) {
    questionEl.innerText = question.question
    question.answers.array.forEach(answers => {
     btnChoiceEl = document.createElement('shownAnswrButtons') 
     shownAnswrButtons.innerText = answers.text
     shownAnswrButtons.classList.add('btn')
    if (answers.correct) {
      shownAnswrButtons.dataset.correct = answer.correct
 }
    shownAnswrButtons.addEventListener('click', chooseAnswer)   
    quizOptions.appendChild(shownAnswrButtons)
              
})

function quizReset() {   
    while (answerOptions.firstChild) {
        answerOptions.removeChild
        (answerOptions.firstChild)
    }        
}

    displayQuestion(randomizer[displayedQuestions])
    
}

function chooseAnswer()  {
    questionEl.innerText = quizQuestions.quizQuestions
//    
}


function chooseAnswer(e) {
  const  chosenBtn = e.target
  const correct = chosenBtn.dataset.correct
  setStatusClass(document.body, correct)
    Array.from(quizOptions.children).forEach(shownAnswrButtons => {
        setStatusClass(shownAnswrButtons, shownAnswrButtons.dataset.correct)
    })
}
if (randomizer.length > displayedQuestions + 1) {
    } else {
        strtButton.innerText = 'Try Again'
    }

function setStatusClass(element, correct) {
    clearDecision(element)
    if (correct) {
        element.classList.add('You got it!')
    } if (correct=false) {
        element.classList.add('Nope, sorry...')
    }
} 

const quizQuestions = [
    {
        question: 'What is over 9000?',
        answers: [
            {text: 'napa', correct: false },
            {text: 'goku', correct: true },
            {text: 'vegeta', correct: false},
            {text: 'krillin lol', correct: false}
        ]
}
]
}
