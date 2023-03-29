let startBtnEl =  document.getElementById("start-btn");
startBtnEl.addEventListener("click", startTheQuiz);
let startPageDivEl = document.getElementById("start-page-div");
let timeLeft = 150;
let timerId;
let timeEl = document.getElementById("time");



function startTheQuiz() {
startPageDivEl.setAttribute("class", "hide");

timerId = setInterval (OneSecTimerFunc,1000);
timeEl.textContent =  timeLeft;
}

function OneSecTimerFunc() {
  timeLeft -=1;  // timeLeft--;
  timeEl.textContent =  timeLeft;

}

