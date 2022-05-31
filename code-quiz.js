var btnChoiceEl = document.getElementById('buttonChoices')
var questionEl = document.getElementById('question')
var strtButton = document.getElementById('start-quiz');
var quizContainerEl = document.getElementById('quiz-container')
var nxtButton = document.getElementById('next-button')
//start button logic
strtButton.addEventListener('click',strtGame)
nxtButton.addEventListener('click', () =>
displayedQuestions++,
nxtQuestion()
)
function strtGame() {
//math.random is set to -.5 so that it's less than 0 or above 0 50% of the time
var randomizer = quizQuestions.sort(() => Math.random() - .5)
//start at 0 because we're starting at the fist question
var displayedQuestions = 0;
randomQstnDecider()
console.log('awwwjisss')
}


function randomQstnDecider ()  {
    nxtQuestion(randomizer[displayedQuestions])
}

function nxtQuestion() {
    shownQuestion(randomizer[displayedQuestions])
    quizContainerEl.appendChild(genButton)
}

function shownQuestion()  {
    questionEl.innerText = quizQuestions.quizQuestions
    quizQuestions.quizAnswers.array.forEach(quizAnswers => {
       btnChoiceEl = document.createElement('genButton') 
       genButton.innerText = quizAnswers.text
       genButton.classList.add('btn')
       if (quizAnswers.correct) {
           button.dataset.correct = answer.correct
       }
       genButton.addEventListener('click', chooseAnsw)             
    })
}

function quizReset() {
    while (btnChoiceEl.firstChild) {
        btnChoiceEl.removeChild
        (btnChoiceEl.firstChild)
    }
     
    
}

function chooseAnsw(e) {
    chosenBtn = e.target
    correct = chosenBtn.dataset.correct
    decideRightorWrong(document.body, correct)
    Array.from(btnChoiceEl.children).forEach(button => {
        decideRightorWrong(button, button.dataset.correct)
    })
}
if (randomizer.length > displayedQuestions + 1) {
    } else {
        strtButton.innerText = 'Try Again'
    }

function decideRightorWrong(element, correct) {
    clearDecision(element)
    if (correct) {
        element.classList.add('You got it!')
    } else {
        element.classList.add('Nope, sorry...')
    }
} 

function clearRightWrong(element) {
    element.classList.remove('You got it!')
} else {
    element.classList.remove('Nope, sorry...')
}



var quizQuestions = 
    {
        quizQuestions: 'What is over 9000?',
        quizAnswers: [
            {text: 'napa', correct: false },
            {text: 'goku', correct: true },
            {text: 'vegeta', correct: false},
            {text: 'krillin lol', correct: false}
        ]
    }
