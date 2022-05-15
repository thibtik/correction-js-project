// DOM ELEMENTS
const dom_questions_view = document.getElementById("questions-view");

// DATA  ---------------------------------------------------------
let questions = [];

// HIDE SHOW  ---------------------------------------------------------

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//LOCAL STORAGE ---------------------------------------------------------
function loadQuestion() {
  let storedQuestion = JSON.parse(localStorage.getItem("questions"));
  if (storedQuestion !== null) {
    questions = storedQuestion;
  }
}

function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

// EDIT ---------------------------------------------------------

function renderQuestion() {
  // Remove the card container and create a new one
  dom_questions_container = document.getElementById("questions-container");
  dom_questions_container.remove();

  dom_questions_container = document.createElement("div");
  dom_questions_container.id = "questions-container";
  dom_questions_view.appendChild(dom_questions_container);

  // Loop on questions and create the DOM

  // 2 - For all questions,  create a new div (class : item), and append it the container
  for (let index = 0; index < questions.length; index++) {
    let question = questions[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    dom_questions_container.appendChild(card);

    let questionInfos = document.createElement("div");
    questionInfos.className = "question-info";
    card.appendChild(questionInfos);

    let title = document.createElement("spam");
    title.className = "title";
    title.textContent = question.title;
    questionInfos.appendChild(title);

    // Create spams for title and author
    let actions = document.createElement("div");
    actions.className = "actions";
    card.appendChild(actions);

    let editAction = document.createElement("img");
    editAction.src = "../../img/edit.svg";
    editAction.addEventListener("click", onEditQuestion);
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "../../img/trash.png";
    trashAction.addEventListener("click", onRemoveQuestion);
    actions.appendChild(trashAction);
  }
}

function onRemoveQuestion(e) {
  //  Get index
  let index = e.target.parentElement.parentElement.dataset.index;

  // Remove question
  questions.splice(index, 1);

  // Save
  saveQuestions();

  // Refresh view
  renderQuestion();
}

function onEditQuestion() {}

function onAddQuestion() {}

// MAIN  ---------------------------------------------------------
loadQuestion();
renderQuestion();
