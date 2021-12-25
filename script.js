const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('#choice-text'))
const scoreText= document.querySelector('#score')


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


/* question and answers array */
var questions = [
    {
    question: 'Arrays in javascript can be used to store',
        
            choice1: 'Numbers and strings', 
            choice2:'Other arrays',
            choice3:'Booleans', 
            choice4:'All of the above', 
            answer: 4,

        
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
       
            choice1:'<js>',
            choice2:'<script>', 
            choice3:'<javascript>', 
            choice4:'<scripting>', 
            answer: 2,

        
    },

    {
        question: 'How do you create a function in Javascript?',
       
            choice1:'function myFunction()', 
            choice2:'function = myFunction()',
            choice3: 'function:myFunction()', 
            choice4:'function myFunction', 
            answer: 1,

        
    },

    {
        question: 'How do you write an IF statement in JavaScript?',
       
            choice1: 'if i = 5 then', 
            choice2:'if i == 5 then', 
            choice3:'if i = 5', 
            choice4:'if (i == 5)', 
            answer: 4,

    
        
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
    
            choice1:'msgBox("Hello World");', 
            choice2: 'alertBox("Hello World");', 
            choice3: 'msg("Hello World");', 
            choice4: 'alert("Hello World");', 
            answer: 4,

        
    },

]


/* actual game function*/
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5



function startGame() {

    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

function getNewQuestion() {

    if(availableQuestions.length===0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    //progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 100)
    })
})



/*score code*/

    incrementScore = num => {
        score +=num
        scoreText.innerText = score
    }

    startGame()

    /* timer code */
const time = document.getElementById('time');
let timeSecond = 60;

time.innerHTML=`00:${timeSecond}`;

const countDown = setInterval (()=>{
    timeSecond--;
    time.innerHTML= `00:${timeSecond}`;
    if(timeSecond <=0 || timeSecond<1){
        clearInterval(countDown);
    }

}, 1000)