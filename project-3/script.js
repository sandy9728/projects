const questions = [
    {
        question:"Which is the fastest land animal ?",
        answers: [
        {text: "lion", correct: false},
        {text: "Horse", correct: false},
        {text: "Hare", correct: false},
        {text: "Cheetah", correct: true}
        ]   
    },
    {
        question:"Which country has the highest life expectancy ?",
        answers: [
        {text: "Japan", correct: false},
        {text: "Hong Kong", correct: true},
        {text: "Iceland", correct: false},
        {text: "USA", correct: false}
        ]    
    },
    {
        question:"Which planet has the most moons ?",
        answers: [
        {text: "Jupiter", correct: false},
        {text: "Mars", correct: false},
        {text: "Saturn", correct: true},
        {text: "Uranus", correct: false}
        ]    
    },
    {
        question:"In which year the first Iphone was released?",
        answers: [
        {text: "2004", correct: false},
        {text: "2002", correct: false},
        {text: "2000", correct: false},
        {text: "2007", correct: true}
        ]    
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + " ) " + currentquestion.question

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("click")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

}   



function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();