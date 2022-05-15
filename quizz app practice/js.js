const start=document.getElementById("start");
const qquestion=document.getElementById("question");
const dom_answerA=document.getElementById("A");
const dom_answerB=document.getElementById("B");
const dom_answerC=document.getElementById("C");
const dom_answerD=document.getElementById("D");
const scoree=document.getElementById("score");



let questions=[
    {
        title: "What is your name?",
        answerA: "Thib",
        answerB: "theavy",
        answerC: "theara",
        answerD: "dfd",
        correct: "B"
        
    },
    {
        title: "how old are you?",
        answerA: "23",
        answerB: "23",
        answerC: "53",
        answerD: "5",
        correct: "C"
        
    },
    {
        title: "What is your first name?",
        answerA: "theavy",
        answerB: "ddss",
        answerC: "cat",
        answerD: "dfd",
        correct: "A"
        
    },
    
]

let currentQuestionindex=0;

function renderQuestion(){
    let question=questions[currentQuestionindex];
    
    qquestion.textContent=question.title;
    dom_answerA.textContent=answerA.dom_answerA;
    console.log(qu)
}
