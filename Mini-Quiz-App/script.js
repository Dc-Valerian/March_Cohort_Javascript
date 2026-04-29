const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    answers: ["let", "var", "const", "all of the above"],
    correct: "all of the above",
  },
  {
    question: "Which symbol is used for strict equality?",
    answers: ["==", "===", "!=", "!=="],
    correct: "===",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const lastScoreEl = document.getElementById("last-score");

// To get last score from local storage and display it
if (localStorage.getItem("lastScore")) {
  lastScoreEl.textContent = "Last Score: " + localStorage.getItem("lastScore");
}

function showQuestion() {
  // to get the current question from the questions array using the currentQuestionIndex
  const currentQuestion = questions[currentQuestionIndex];
  // to display the current question on the page
  questionEl.textContent = currentQuestion.question;

  answersEl.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(answer));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (answer === currentQuestion.correct) {
    alert("✅ Correct!");
    score++;
  } else {
    alert("❌ Wrong! Correct answer is " + currentQuestion.correct);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  resultEl.textContent = `🎉 Quiz Over! You scored ${score} out of ${questions.length}`;

  localStorage.setItem("lastScore", score);

  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
  questionEl.textContent = "";
}

showQuestion();
