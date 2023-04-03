var questionsArr = [
    {Question:"1. What is question one?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "D. This is an answer option"
},

    {Question:"2. What is question two?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "B. This is an answer option"
},
    {Question:"3. What is question three?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "A. This is an answer option"
},
    {Question:"4. What is question four?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect:"D. This is an answer option"
},
    {Question: "5. What is question five?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "C. This is an answer option"
},
    {Question:"6. What is question six?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "C. This is an answer option"
},
    {Question:"7. What is question seven?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "A. This is an answer option"
},
    {Question:"8. What is question eight?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "D. This is an answer option"
},
    {Question:"9. What is question nine?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "B. This is an answer option"
},
    {Question:"10. What is question ten?",
    answers: ["A. This is an answer option", "B. This is an answer option", "C. This is an answer option", "D. This is an answer option"],
    isCorrect: "A. This is an answer option"
}
]
var answerChoice = document.getElementById("#answer");
var userChoice = answerChoice.addEventListener("click", grade);
var timerEl = document.getElementById('timer')
var secondsLeft = 90