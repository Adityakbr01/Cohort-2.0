// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    }
];

// Reference to DOM elements
const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

// Function to load quiz
function loadQuiz() {
    quizContainer.innerHTML = '';
    quizData.forEach((q, index) => {
        const questionEl = document.createElement('div');
        questionEl.classList.add('question');
        questionEl.innerText = `${index + 1}. ${q.question}`;

        const optionsEl = document.createElement('div');
        optionsEl.classList.add('options');

        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}"> ${option}
            `;
            optionsEl.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionEl);
        quizContainer.appendChild(optionsEl);
    });
}

// Function to calculate score
function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    resultContainer.innerText = `Your Score: ${score} / ${quizData.length}`;
}

// Load quiz on page load
loadQuiz();

// Event listener for submit
submitBtn.addEventListener('click', calculateScore);
