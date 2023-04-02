//3 params, questions, score, currQuestIndex
function Quiz(questions) {
  this.score = 0;
  this.currQuestIndex = 0;
  this.questions = questions;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.currQuestIndex];
};

Quiz.prototype.isEnded = function () {
  return this.currQuestIndex === this.questions.length - 1;
};

//Function will 3 things
// 1. Validate the answer
// 2. Update the score
// 3. Increment the current index
Quiz.prototype.validateAnswerAndUpdateScore = function (choice) {
  let question = this.getQuestion();
  if (question.answer === choice) {
    this.score++;
  }
  this.currQuestIndex++;
};

function Question(text, options, answer) {
  this.text = text;
  this.options = options;
  this.answer = answer;
}

let questions = [
  new Question(
    "Who is the current PM of India?",
    ["Narenda Modi", "Jawaharlal Nehru", "Pratibha Patil", "Adbul Kalam"],
    "Narenda Modi"
  ),
  new Question(
    "Whats the National bird of India?",
    ["Piegon", "Peocock", "Koyal", "Crow"],
    "Peocock"
  ),
];

function showScores() {
  console.log("Scores :-", quiz.score);
}

function loadQuestions() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //Show current question!
    let questionEle = document.getElementById("question");
    let curQuest = quiz.getQuestion();
    questionEle.innerHTML = curQuest.text;

    //Show current question's options
    let options = curQuest.options;
    for (let i = 0; i < options.length; i++) {
      let eachOptElement = document.getElementById("choice" + i);
      eachOptElement.innerHTML = options[i];
      handleOptionBtn("btn" + i, options[i]);
    }
  }
}

function handleOptionBtn(btnId, choice) {
  let btn = document.getElementById(btnId);
  btn.addEventListener("click", () => {
    quiz.validateAnswerAndUpdateScore(choice);
    loadQuestions();
  });
}

let quiz = new Quiz(questions);

//Load questions
loadQuestions();
