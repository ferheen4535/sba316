let num1 = Math.ceil(Math.random() * 10); // Change to let
let num2 = Math.ceil(Math.random() * 10); // Change to let

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const winMessageEl = document.getElementById("winMessage");


///////multiplication code used from this yt https://www.youtube.com/watch?v=f5-b4vS3t54&t=602s/////
///////and manipulated for the game///
let correctAnswers = 0;
let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreEl.innerText = `Score: ${score}`;
updateQuestion();

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form reload//

  const userAns = +inputEl.value;
  const correctAns = num1 * num2; // Calculate correct answer//

  if (userAns === correctAns) {
    score++;
    correctAnswers++;
    updateLocalStorage();
    replaceAcorns();
  } else {
    score--;
    updateLocalStorage();
  }

  inputEl.value = ""; // Clear input after submit//
  updateQuestion(); // update new question//

  // Check Win Condition
  if (correctAnswers === 3) {
    winMessageEl.innerText = "You Win!";
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function updateQuestion() {
  num1 = Math.ceil(Math.random() * 10); // Update with new numbers//
  num2 = Math.ceil(Math.random() * 10);
  questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
}



function replaceAcorns() {      //replace the acorn with squirrel//

  const acornContainers = document.querySelectorAll(".box3 div");

  if (acornContainers.length < 3) return;

 
  const squirrelImg = document.createElement("img");
  squirrelImg.src = "squirrel.png";
  squirrelImg.alt = "squirrel";
  squirrelImg.style.width = "50px"; //size of squirrel//

  if (correctAnswers === 1) {
    acornContainers[0].innerHTML = ""; // Remove old acorn
    acornContainers[0].appendChild(squirrelImg); // Append squirrel
  } else if (correctAnswers === 2) {
    acornContainers[1].innerHTML = ""; // Remove second acorn
    acornContainers[1].appendChild(squirrelImg);
    acornContainers[0].style.display = "none"; // Hide first acorn
  } else if (correctAnswers === 3) {
    acornContainers[2].innerHTML = ""; 
  acornContainers[2].innerText = "You Win!";
acornContainers[2].style.fontSize = "50px";
  acornContainers[2].style.color = "white";
  acornContainers[2].style.fontWeight = "bold";
  acornContainers[2].style.textAlign = "center";
acornContainers[1].style.display = "none"; 

/////reset score after "You win"////
score = 0;
    correctAnswers = 0;
    updateLocalStorage();
    scoreEl.innerText = `Score: ${score}`;
    setTimeout(() => {
      location.reload();
    }, 2000);

  } 
}




// /////SOURCE/////
// //https://www.youtube.com/watch?v=f5-b4vS3t54&t=602s//  //MULTIPLICATION BOX//
// //https://www.youtube.com/watch?v=7LGpIQ6ceJs/// to replace the acorn images with the squirrel. 
//https://www.w3schools.com/html/html5_audio.asp#gsc.tab=0///background music
//https://stackoverflow.com/questions/7381712/how-to-reset-my-score-javascript/// how to reset score///