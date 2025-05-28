const questions = [
    {
        question: "What is a Website?",
        answers: [
            { text: "A Book", correct: false},
            { text: "A place to watch TV", correct: false},
            { text: "A collection of web pages", correct: true},
            { text: "A phone app", correct: false},
        ]
    },
    {
         question: "Which language is used to build the structure of a web page?",
        answers: [
            { text: "CSS", correct: false},
            { text: "HTML", correct: true},
            { text: "Python", correct: false},
            { text: "Java", correct: false},
        ]
    },
    {
         question: "What does CSS do?",
        answers: [
            { text: "Makes the website faster", correct: false},
            { text: "Stores data ", correct: false},
            { text: "Adds style to a web page", correct: true},
            { text: "Write Articles", correct: false},
        ]
    },
    {
         question: "What is Javascript used for in web development?",
        answers: [
            { text: "Coloring the website", correct: false},
            { text: "Building computers", correct: false},
            { text: "Writing emails", correct: false},
            { text: "Making web pages interactive", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
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
    }
     else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === "true"){
            button.classList.add("correct");
          }
          button.disabled = true;
     });
     nextButton.style.display = "block";

     
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    // questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();