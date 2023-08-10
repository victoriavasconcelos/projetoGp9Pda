const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

var nome = prompt("Digite seu usuário:");

startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
}

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
}

continueBtn.onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestions(0);
  questionCounter(1);
  headerScore();
}

tryAgainBtn.onclick = () => {
  quizBox.classList.add('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  currentQuestionIndex = 0;
  userScore = 0;
  showQuestions(currentQuestionIndex);
  questionCounter(currentQuestionIndex + 1);
  headerScore();
}

goHomeBtn.onclick = () => {
  quizSection.classList.remove('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  currentQuestionIndex = 0;
  userScore = 0;
  showQuestions(currentQuestionIndex);
  questionCounter(currentQuestionIndex + 1);
}

let currentQuestionIndex = 0;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestions(currentQuestionIndex);
    questionCounter(currentQuestionIndex + 1);
    nextBtn.classList.remove('active');
  } else {
    showResultBox();
  }
}
