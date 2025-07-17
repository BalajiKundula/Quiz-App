const questions = [
 {
        question: "What is the capital city of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "African Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1941", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "What is the currency of Brazil?",
        answers: [
            { text: "Real", correct: true },
            { text: "Peso", correct: false },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Which element is essential for human respiration?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Carbon", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "John Glenn", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Which sport is associated with Wimbledon?",
        answers: [
            { text: "Tennis", correct: true },
            { text: "Cricket", correct: false },
            { text: "Football", correct: false },
            { text: "Golf", correct: false }
        ]
    },
    {
        question: "What is the primary source of energy for Earth's climate system?",
        answers: [
            { text: "Sun", correct: true },
            { text: "Moon", correct: false },
            { text: "Geothermal Heat", correct: false },
            { text: "Ocean Currents", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "China", correct: false },
            { text: "United Kingdom", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Antarctic Desert", correct: true },
            { text: "Sahara Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Kalahari Desert", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Jonas Salk", correct: false }
        ]
    },
    {
        question: "Which mountain is the highest in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the official language of Egypt?",
        answers: [
            { text: "Arabic", correct: true },
            { text: "French", correct: false },
            { text: "English", correct: false },
            { text: "Spanish", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text: "Nitrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of the Indian Nation'?",
        answers: [
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "Which country is known for the Great Wall?",
        answers: [
            { text: "China", correct: true },
            { text: "Japan", correct: false },
            { text: "India", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at standard pressure?",
        answers: [
            { text: "100°C", correct: true },
            { text: "0°C", correct: false },
            { text: "50°C", correct: false },
            { text: "200°C", correct: false }
        ]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: [
            { text: "Lion", correct: true },
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen",  correct: true },
            { text: "Won", correct: false },
            { text: "Yuan", correct: false },
            { text: "Dollar", correct: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Mother Teresa", correct: false },
            { text: "Jane Addams", correct: false },
            { text: "Pearl Buck", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest in the world?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false },
            { text: "1965", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".quiz");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffledQuestions = shuffleArray([...questions]);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    const existingButtons = answerButtons.querySelectorAll(".btn");
    existingButtons.forEach(button => button.remove());
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.style.backgroundColor = "#90EE90";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "#FF6347";
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "#90EE90";
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();