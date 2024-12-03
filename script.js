const questions = [
  {
    question: "What is the correct syntax to create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "myFunction function()", correct: false },
      { text: "def myFunction()", correct: false }
    ]
  },
  {
    question: "How can you add a comment in JavaScript?",
    answers: [
      { text: "&lt;!-- This is a comment --&gt;", correct: false },
      { text: "# This is a comment", correct: false },
      { text: "// This is a comment", correct: true },
      { text: "/* This is a comment */", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
      { text: "Character", correct: true }
    ]
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "What will typeof NaN return?",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false }
    ]
  },
  {
    question: "What is the output of the following code: console.log(2 + '2');?",
    answers: [
      { text: "22", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    question: "Which method is used to find the length of a string in JavaScript?",
    answers: [
      { text: "size()", correct: false },
      { text: "length()", correct: false },
      { text: "len()", correct: false },
      { text: "string.length", correct: true }
    ]
  },
  {
    question: "What is the result of the following code: console.log(typeof null);?",
    answers: [
      { text: "null", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "boolean", correct: false }
    ]
  },
  {
    question: "Which symbol is used to access properties of an object in JavaScript?",
    answers: [
      { text: ". (dot)", correct: true },
      { text: ": (colon)", correct: false },
      { text: "-> (arrow)", correct: false },
      { text: "# (hash)", correct: false }
    ]
  },
  {
    question: "What does the isNaN() function do?",
    answers: [
      { text: "Checks if a value is null.", correct: false },
      { text: "Checks if a value is NaN or not.", correct: true },
      { text: "Checks if a value is a number.", correct: false },
      { text: "Checks if a value is undefined.", correct: false }
    ]
  }
];

const questionElement =document.getElementById("question");
const answerBtn =document.getElementById("answer-btn");
const nextBtn =document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score=0;


function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextBtn.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questinNo = currentQuestionIndex +1;
  questionElement.innerHTML = `Q ${questinNo}: ${currentQuestion.question}`;
 
 
  currentQuestion.answers.forEach(answer => {
      const button =document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerBtn.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextBtn.style.display="none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
   }
}
function selectAnswer(e){
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if(isCorrect){
    selectedButton.classList.add("correct");
    score++;
  }
  else{
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display="block";
}


function showScore(){
  resetState();
  questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "play Again";
  nextBtn.style.display = "block";
}




function handleNextBtn(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}
nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
});

startQuiz();
