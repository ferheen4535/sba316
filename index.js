const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const winMessageEl = document.getElementById("winMessage");


///multiplication code////
let correctAnswers = 0;


let score = JSON.parse(localStorage.getItem("score"));



if (!score) {
  score = 0;
}


scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
const correctAns = num1 * num2;



formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form reload


  const userAns = +inputEl.value;


  if (userAns === correctAns) {
    score++;
    correctAnswers++;  //increase score//
    updateLocalStorage();
    replaceAcorns(); //replace acorn with image of squirrel//
  } else {
    score--; // wrong answer will decrease the score//
    updateLocalStorage();
  }


  inputEl.value = ""; // Clear input field



  
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}



function replaceAcorns() {      //replace the acorn with squirrel//

  const acornContainers = document.querySelectorAll(".box3 div");

  if (acornContainers.length < 3) return;

  const winMessageEl = document.getElementById("winMessage");
  const squirrelImg = document.createElement("img");
  squirrelImg.src = "squirrel.png";
  squirrelImg.alt = "squirrel";
  squirrelImg.style.width = "70px"; //size of squirrel//

  if (correctAnswers === 1) {
    acornContainers[0].innerHTML = ""; // Remove old acorn
    acornContainers[0].appendChild(squirrelImg); // Append squirrel
  } else if (correctAnswers === 2) {
    acornContainers[1].innerHTML = ""; // Remove second acorn
    acornContainers[1].appendChild(squirrelImg);
    acornContainers[0].style.display = "none"; // Hide first acorn
  } else if (correctAnswers === 3) {
    acornContainers[2].innerHTML = ""; // Remove third acorn
    winMessageEl.innerText[1].appendChild("You Win!");
    acornContainers[1].style.display = "none"; // Hide second acorn
  } 
}























// ////////////////////
// ////////////rollover for the right answer///

// // function replaceAcorn() {
// //   const acornEls = document.querySelectorAll('.box3 .acorn1, .box3 .acorn2, .box3 .acorn3');
  
// //   acornEls.forEach((acornEl, index) => {
// //     setTimeout(() => {
// //       acornEl.classList.add('fade-out');
// //       setTimeout(() => {
// //         acornEl.src = "squirrel.png"; // Replace with squirrel image
// //         acornEl.classList.remove('fade-out');
// //       }, 300); // Match this with your CSS transition time
// //     }, index * 500); // Stagger the effect by 500ms for each
// //   });
// // }
  
  


// /////SOURCE/////
// //https://www.youtube.com/watch?v=f5-b4vS3t54&t=602s//       MULTIPLICATION BOX
// //https://www.youtube.com/watch?v=7LGpIQ6ceJs/// to replace the acorn images with the squirrel. 