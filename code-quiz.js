const strtButton = document.getElementById('start-quiz')
const nxtButton = document.getElementById('next-question')
const quizContainerEl = document.getElementById('questions-container')
const questionEl = document.getElementById('question')
const btnChoiceEl = document.getElementById('answer-options')

(function() {
    var sec = 60;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

let randomizer, displayedQuestions

strtButton.addEventListener('click', strtGame)

nxtButton.addEventListener('click', () => {
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
function nxtQuestion() {
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
    while (btnChoiceEl.firstChild) {
        btnChoiceEl.removeChild(btnChoiceEl.firstChild)
    }
}

function chooseAnswer(e) {
    const clickedTarget = e.target
    const correct = clickedTarget.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(btnChoiceEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomizer.length > displayedQuestions + 1) {
        nxtButton.classList.remove('hide')
    } else {
        strtButton.innerText = 'Try.Again'
        strtButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct!')
    } else {
        element.classList.add('nope')
    }
}

function clearStatus(element) {
    element.classList.remove('correct!')
    element.classList.remove('nope')
}
const quizQuestions = [
    {
        question: 'What is JavaScript?',
        answers: [
            { text: 'JavaScript is a scripting language used to make the website interactive', correct: true },
            { text: ' JavaScript is an assembly language used to make the website interactive', correct: false },
            { text: ' JavaScript is a compiled language used to make the website interactive', correct: false },
            { text: 'None of the mentioned', correct: false },
        ]
    },
    {
        question: 'Arrays in JavaScript are defined by which of the following statements?',
        answers: [ 
            { text: 'It is an ordered list of objects', correct: false },
            { text: 'It is an ordered list of string', correct: false },
            { text: 'It is an ordered list of values', correct: true },
            { text: 'It is an ordered list of functions', correct: false },
        ]
    },    {
        question: 'Which of the following is not javascript data types?',
        answers: [    
            { text: 'Null type', correct: false },
            { text: 'Undefined type', correct: false },
            { text: 'Number type', correct: false },
            { text: 'All of the mentioned', correct: true },
        ]
    },    {
        question: 'Where is Client-side JavaScript code is embedded within HTML documents?',
        answers: [
            { text: 'A URL that uses the special javascript:encoding', correct: false },
            { text: 'A URL that uses the special javascript:stack', correct: false },
            { text: 'A URL that uses the special javascript:protocol', correct: true },
            { text: 'A URL that uses the special javascript:code', correct: false },
        ]
    },    {
        question: 'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
        answers: [         
            { text: 'Window', correct: false },
            { text: 'Standard', correct: false },
            { text: 'Location', correct: false },
            { text: 'Position', correct: true },
        ]
    },    {
        question: 'Which of the following can be used to call a JavaScript Code Snippet?',
        answers: [
            { text: 'Function/Method', correct: true },
            { text: 'Triggering Event', correct: false },
            { text: 'Preprocessor', correct: false },
            { text: 'RMI', correct: false },
        ]
    },    {
        question: 'Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?',
        answers: [          
            { text: 'will be displayed as JavaScript text on the browser', correct: false },
            { text: 'will work perfectly well on a Windows Machine', correct: true },
            { text: 'will throw errors and exceptions', correct: false },
            { text: 'must be restricted to a Unix Machine only', correct: false },
        ]
    },    {
        question: 'Why JavaScript Engine is needed?',
        answers: [         
            { text: 'Compiling the JavaScript', correct: false },
            { text: 'Interpreting the JavaScript', correct: true },
            { text: 'Parsing the javascript', correct: false },
            { text: 'Both Compiling & Interpreting the JavaScript', correct: false },
        ]
    },
]


