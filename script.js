let startBtnEl =  document.getElementById("start-btn");
startBtnEl.addEventListener("click", startTheQuiz);
let startPageDivEl = document.getElementById("start-page-div");
let timeLeft = 150;
let timerId;
let timeEl = document.getElementById("time");
let questionsPageDivEl =  document.getElementById("questions-page-div");

let questions = [
  { question: "Q1",
    choices: ["A1",  "B1", "C1", "D1"],
    corrAns: "C1"
  },
  { question: "Q2",
  choices: ["A2",  "B2", "C2", "D2"],
  corrAns: "C2"
},
{ question: "Q3",
choices: ["A3",  "B3", "C3", "D3"],
corrAns: "B3"
},
{ question: "Q4",
choices: ["A4",  "B4", "C4", "D4"],
corrAns: "A4"
},
{ question: "Q5",
choices: ["A5",  "B5", "C5", "D5"],
corrAns: "D5"
},
{ question: "Q6",
choices: ["A6",  "B6", "C6", "D6"],
corrAns: "A6"
},
];

let index =0;
let currentQuestion = questions[index];


function startTheQuiz() {
  // start page handling
startPageDivEl.setAttribute("class", "hide");

// timer handling
timerId = setInterval (OneSecTimerFunc,1000);
timeEl.textContent =  timeLeft;

// questions page handling
questionsPageDivEl.removeAttribute("class");
showQuestion();
}

function OneSecTimerFunc() {
  timeLeft -=1;  // timeLeft--;
  timeEl.textContent =  timeLeft;

}

function showQuestion() {
  
currentQuestion = questions[index];
let questionEl = document.getElementById("question");

questionEl.textContent = currentQuestion.question;

}