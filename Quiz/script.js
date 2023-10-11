const questions = [
    {
        question: "What does KFC stand for?",
        options: ["King OF France Center", "Kentucky Fried Chicken", "King Fried Chicken", "Kentucky Fried Chicken"],
        answer: "Kentucky Fried Chicken",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "What street does the British prime minister live on?",
        options: ["Berlin", "Downing Street", "Paris", "Rome"],
        answer: "Downing Street",
    },
    {
        question: "In what year did the Berlin Wall fall?",
        options: ["1990", "1992", "1991", "1989"],
        answer: "1989",
    },
    {
        question: "What is the holy book of Judaism?",
        options: ["Torah", "Deep Work", "Great War", "Kingsman"],
        answer: "Torah",
    },
    
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", checkAnswer);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is: " + question.answer;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        resultElement.textContent = "Quiz completed. Your score: " + score + " out of " + questions.length;
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", () => {
    resultElement.textContent = "";
    loadQuestion();
    nextButton.style.display = "none";
});

loadQuestion();
