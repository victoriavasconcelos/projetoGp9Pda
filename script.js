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

const optionlist = document.querySelector('.option-list');

function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = '';
  for (let i = 0; i < questions[index].options.length; i++) {
    optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
  }

  optionlist.innerHTML = optionTag;

  const options = document.querySelectorAll('.option');
  options.forEach((option) => {
    option.classList.remove('disabled');
    option.addEventListener('click', () => optionSelected(option));
  });
}

function optionSelected(answer) {
  const userAnswer = answer.textContent;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    userScore += 1;
    headerScore();
    nextBtn.classList.add('active');
  } else {
    answer.classList.add('incorrect');

    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
      if (option.textContent === correctAnswer) {
        option.classList.add('correct');
      }
    });

    setTimeout(() => {
      tryAgainBtn.click(); // reiniciar o jogo
    }, 1000);
  }

  const options = document.querySelectorAll('.option');
  options.forEach((option) => {
    option.classList.add('disabled');
  });
}

function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  const scoreText = document.querySelector('.score-text');
  scoreText.textContent = `Olá  ${nome}! Sua Pontuação é de ${userScore} de ${questions.length}`;

  const circularProgress = document.querySelector('.circular-progress');
  const progressValue = document.querySelector('.progress-value');
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(rgb(221, 173, 110) ${progressStartValue * 3.6}deg, #706454 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }

  }, speed);
}