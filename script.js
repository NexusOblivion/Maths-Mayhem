let i = 1;
const operators = ["+", "-", "*"];
const answers = [];
const isCorrect = [];

let time = 0;
let operator;
let score;
let operatorSelector;
let x;
let y;

function generateQuestions() {
  timer();
  const timerInterval = setInterval(timer, 1000);
  time = 0;

  i = 1;
  answers.length = 0;

  document.getElementById("score").innerHTML = "Score:";
  document.getElementById("start").style.display = "none";
  document.getElementById("correct-answers").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("input").select();
  increment();
}

function increment() {
  event.preventDefault();

  operatorSelector = Math.floor(Math.random() * operators.length);
  operator = operators[operatorSelector];

  x = getRandomNumber(1, 15);
  y = getRandomNumber(1, 15);

  if (i < 21) {
    document.getElementById("question").innerHTML = i;
    document.getElementById(
      "question_equation"
    ).innerHTML = `${x} ${operator} ${y}`;
    i++;
  } else if (i === 21) {
    document.getElementById("main").style.display = "none";
    document.getElementById("correct-answers").style.display = "block";
    stopExercise();
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function answerCheck() {
  const answer = document.getElementById("input").value;
  answers.push(answer.toString());

  if (eval(`${x} ${operator} ${y}`) == answer) {
    isCorrect.push("y");
  }

  document.getElementById("form").reset();
  increment();
}

function stopExercise() {
  document.getElementById("correct").innerHTML = answers.join(", ");
  score = isCorrect.length;
  document.getElementById("score").innerHTML += ` ${score}/20`;
  clearInterval(timerInterval);
}

function timer() {
  time++;
  if (i < 21) {
    document.getElementById("time").innerHTML = `Time: ${time}s`;
  }
}

function startUnlimited() {
  i = 1;
  document.getElementById("startUnlimited").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("input").select();
  unlimitedIncrement();
}

function unlimitedIncrement() {
  event.preventDefault(); // Prevents the enter key from refreshing the page
  const operatorSelector = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorSelector];
  const x = Math.floor(Math.random() * 15) + 1;
  const y = Math.floor(Math.random() * 15) + 1;

  if (i !== 0) {
    document.getElementById("question").innerHTML = i;
    document.getElementById(
      "unlimitedLabel"
    ).innerHTML = `${x} ${operator} ${y}`;
    i++;
  }
}

function unlimitedAnswerCheck() {
  const form = document.getElementById("form");
  form.reset();
  unlimitedIncrement();
}

function stopUnlimited() {
  document.getElementById("main").style.display = "none";
  document.getElementById("startUnlimited").style.display = "block";
}
