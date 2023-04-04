var questionsArr = ["Question 1: What is questione one",
   "Question 2: What is the question?",
   "Question 3: What is the question?",
   "Question 4: What is the question?",
   "Question 5: What is the question?",
   "Question 6: What is the question?",
   "Question 7: What is the question?",
   "Question 8: What is the question?",
   "Question 9: What is the question?",
   "Question 10: What is the question?"
]

var answerAArr = [
    "A. This is an answer 1",
    "A. This is an answer 2",
    "A. This is the right answer 3",
    "A. This is an answer 4",
    "A. This is an answer 5",
    "A. This is an answer 6",
    "A. This is the right answer 7",
    "A. This is an answer 8",
    "A. This is an answer 9",
    "A. This is the right answer 10"
]

var answerBArr = [
    "B. This is an answer 1",
    "B. This is the right answer 2",
    "B. This is an answer 3",
    "B. This is an answer 4",
    "B. This is an answer 5",
    "B. This is an answer 6",
    "B. This is an answer 7",
    "B. This is an answer 8",
    "B. This is the right answer 9",
    "B. This is an answer 10"
]

var answerCArr = [
    "C. This is an answer 1",
    "C. This is an answer 2",
    "C. This is an answer 3",
    "C. This is an answer 4",
    "C. This is the right answer 5",
    "C. This is the right answer 6",
    "C. This is an answer 7",
    "C. This is an answer 8",
    "C. This is an answer 9",
    "C. This is an answer 10",
]

var answerDArr = [
    "D. This is the right answer 1",
    "D. This is an answer 2",
    "D. This is an answer 3",
    "D. This is the right answer 4",
    "D. This is an answer 5",
    "D. This is an answer 6",
    "D. This is an answer 7",
    "D. This is the right answer 8",
    "D. This is an answer 9",
    "D. This is an answer 10",
]

var isCorrect = [
    "D. This is the right answer 1",
    "B. This is the right answer 2",
    "A. This is the right answer 3",
    "D. This is the right answer 4",
    "C. This is the right answer 5",
    "C. This is the right answer 6",
    "A. This is the right answer 7",
    "D. This is the right answer 8",
    "B. This is the right answer 9",
    "A. This is the right answer 10",
]
var answerChoice = document.getElementById("#answer");
// var userChoice = answerChoice.addEventListener("click", grade);
var timerEl = document.querySelector(".timer");
var timerA

var start = document.querySelector('#start');


start.addEventListener("click", function () {
    var secondsLeft = 10;
        
        timerA = setInterval(function () {
        
            secondsLeft--;
            timerEl.textContent = "Timer: " + secondsLeft;
            
            if(secondsLeft === 0) {
            timerEl.textContent = 'Times Up!';
            clearInterval(timerA);
            };

        }, 1000);

})

function questions() {
for (var i=0; i < questionsArr.length; i++) {
    document.getElementById(question).innerHTML = JSON.stringify(Question);
    document.getElementById(answer).innerHTML=JSON.stringify(answers);
    grade()
}
}

function grade() {
    var userChoice = answerChoice.addEventListener("click", grade);
    if (userChoice === isCorrect) {
        button.textContent = "correct!";
        button.setAttribute = ("style", "color: green");
    } else {
        button.textContent = "wrong";
        button.setAttribute = ("style", "color: red");
        //secondsLeft -5
    }
}