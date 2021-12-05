//click start button
//timer starts and presented with question
//answer question correctly - presented with another question
//answer incorrectly - time subtracted from the clock
//game ends when all questions answered correctly or timer goes to 0
//ability to save initials and score

const startButton = document.getElementById('startb')
startButton.addEventListener('click', startGame)

var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


var questionContainerElement = document.getElementsByClassName ('question-container')

var shuffledQuestions, currentQuestionIndex


function startGame() {
console.log("game start")
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
//questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {


}

const questions = [
    {
        question: 'Arrays in javascript can be used to store',
        answers: [
            {text: 'Numbers and strings', correct: true},
            {text: 'Other arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'All of the above',  correct: false},


        ]
    }
]