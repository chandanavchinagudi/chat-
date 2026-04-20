// script.js - Fixed & Enhanced with 10 questions per category

// ==================== QUESTIONS DATABASE (10 questions each) ====================
const QUESTIONS_DB = {
    "AI": [
        { q: "What does LLM stand for?", options: ["Large Language Model", "Low Level Machine", "Linear Learning Model", "Logical Language Module"], correct: 0 },
        { q: "Which company created ChatGPT?", options: ["Google", "OpenAI", "Meta", "Microsoft"], correct: 1 },
        { q: "What is the main goal of reinforcement learning?", options: ["Maximize reward", "Minimize error", "Classify data", "Generate text"], correct: 0 },
        { q: "Which AI model is known for image generation?", options: ["GPT-4", "DALL-E", "BERT", "AlphaGo"], correct: 1 },
        { q: "What does NLP stand for in AI?", options: ["Natural Language Processing", "Neural Learning Process", "New Learning Protocol", "None of these"], correct: 0 },
        { q: "Who is known as the father of Artificial Intelligence?", options: ["Alan Turing", "John McCarthy", "Elon Musk", "Bill Gates"], correct: 1 },
        { q: "What is a neural network inspired by?", options: ["Human brain", "Computer hardware", "Mathematical equations", "Cloud computing"], correct: 0 },
        { q: "Which is an example of supervised learning?", options: ["Clustering", "Image classification with labels", "Anomaly detection", "Recommendation systems"], correct: 1 },
        { q: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Active Interface"], correct: 1 },
        { q: "Which company developed Gemini AI?", options: ["OpenAI", "Google", "Meta", "Apple"], correct: 1 }
    ],
    "General Knowledge": [
        { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
        { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
        { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
        { q: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
        { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 },
        { q: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
        { q: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 2 },
        { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
        { q: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 1 },
        { q: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correct: 1 }
    ],
    "Aptitude": [
        { q: "If 2x + 5 = 13, what is x?", options: ["3", "4", "5", "6"], correct: 1 },
        { q: "What is 15% of 240?", options: ["30", "36", "42", "48"], correct: 1 },
        { q: "A train travels 60 km in 45 minutes. Speed in km/h?", options: ["70", "80", "90", "100"], correct: 1 },
        { q: "If A is twice as old as B and A is 20, how old is B?", options: ["5", "10", "15", "20"], correct: 1 },
        { q: "What comes next: 2, 4, 8, 16, ?", options: ["20", "24", "32", "64"], correct: 2 },
        { q: "Find the odd one out: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], correct: 2 },
        { q: "Simple interest on ₹1000 at 5% for 2 years?", options: ["₹50", "₹100", "₹150", "₹200"], correct: 1 },
        { q: "If CAT = 24, then DOG = ?", options: ["26", "27", "28", "29"], correct: 1 },
        { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
        { q: "What is the square root of 144?", options: ["10", "11", "12", "13"], correct: 2 }
    ],
    "Programming": [
        { q: "Which language is used for web styling?", options: ["JavaScript", "Python", "CSS", "Java"], correct: 2 },
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Transfer Machine Language", "Home Tool Markup Language", "None"], correct: 0 },
        { q: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "static"], correct: 2 },
        { q: "What does DOM stand for?", options: ["Document Object Model", "Data Object Module", "Dynamic Output Manager", "None"], correct: 0 },
        { q: "Which is not a programming language?", options: ["Python", "JavaScript", "HTML", "Java"], correct: 2 },
        { q: "What is the output of 2 + '2' in JavaScript?", options: ["4", "22", "Error", "NaN"], correct: 1 },
        { q: "Which symbol is used for comments in CSS?", options: ["//", "/* */", "#", "--"], correct: 1 },
        { q: "What is the correct way to declare a variable in Python?", options: ["var x = 5", "let x = 5", "x = 5", "int x = 5"], correct: 2 },
        { q: "Which loop is used to iterate over object properties in JS?", options: ["for", "while", "for...in", "do...while"], correct: 2 },
        { q: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "System Query Language", "None"], correct: 0 }
    ],
    "Science": [
        { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
        { q: "What force keeps planets in orbit?", options: ["Magnetism", "Gravity", "Friction", "Electricity"], correct: 1 },
        { q: "What is the speed of light?", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correct: 1 },
        { q: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Graphite"], correct: 2 },
        { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
        { q: "What is the boiling point of water in Celsius?", options: ["50", "75", "100", "150"], correct: 2 },
        { q: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], correct: 2 },
        { q: "Which organ pumps blood in the human body?", options: ["Brain", "Lungs", "Heart", "Kidney"], correct: 2 },
        { q: "What is the chemical formula of water?", options: ["H2O", "CO2", "NaCl", "O2"], correct: 0 },
        { q: "Which planet is known as the Blue Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], correct: 2 }
    ],
    "Logical Reasoning": [
        { q: "All cats are animals. Some animals are dogs. Conclusion?", options: ["All cats are dogs", "Some cats are dogs", "No definite conclusion", "All dogs are cats"], correct: 2 },
        { q: "If A is taller than B and B is taller than C, who is tallest?", options: ["C", "B", "A", "Cannot say"], correct: 2 },
        { q: "Find the odd one out: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], correct: 2 },
        { q: "If Monday is today, what day is after 3 days?", options: ["Thursday", "Friday", "Wednesday", "Tuesday"], correct: 0 },
        { q: "Doctor : Hospital :: Teacher : ?", options: ["School", "Court", "Temple", "Office"], correct: 0 },
        { q: "Which number is next: 1, 4, 9, 16, ?", options: ["20", "25", "36", "49"], correct: 1 },
        { q: "Bird is to Fly as Fish is to ?", options: ["Swim", "Walk", "Run", "Jump"], correct: 0 },
        { q: "If all roses are flowers and some flowers fade quickly, then?", options: ["All roses fade quickly", "Some roses fade quickly", "No conclusion", "None"], correct: 2 },
        { q: "A is B's brother. C is A's mother. D is C's father. How is D related to B?", options: ["Grandfather", "Father", "Uncle", "Brother"], correct: 0 },
        { q: "Find the odd one: Pen, Pencil, Book, Eraser", options: ["Pen", "Pencil", "Book", "Eraser"], correct: 2 }
    ],
    "UPSC": [
        { q: "First President of India?", options: ["Jawaharlal Nehru", "Rajendra Prasad", "Mahatma Gandhi", "Sardar Patel"], correct: 1 },
        { q: "When was the Indian Constitution adopted?", options: ["15 Aug 1947", "26 Jan 1950", "26 Nov 1949", "2 Oct 1947"], correct: 2 },
        { q: "Who is known as the Father of Indian Constitution?", options: ["Nehru", "Ambedkar", "Gandhi", "Patel"], correct: 1 },
        { q: "Fundamental Rights are in which articles?", options: ["12-35", "36-51", "1-11", "52-78"], correct: 0 },
        { q: "Who was the first Prime Minister of India?", options: ["Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], correct: 1 },
        { q: "The Preamble starts with which words?", options: ["We the People", "We the Citizens", "We the Indians", "We the Nation"], correct: 0 },
        { q: "How many Fundamental Duties are there?", options: ["8", "10", "11", "12"], correct: 2 },
        { q: "Which is the longest written constitution?", options: ["USA", "India", "UK", "Canada"], correct: 1 },
        { q: "Who appoints the Chief Justice of India?", options: ["President", "Prime Minister", "Parliament", "Supreme Court"], correct: 0 },
        { q: "Article 370 was related to which state?", options: ["Punjab", "Jammu & Kashmir", "Gujarat", "Maharashtra"], correct: 1 }
    ],
    "Current Affairs": [
        { q: "Which country hosted the 2024 Summer Olympics?", options: ["USA", "France", "Japan", "India"], correct: 1 },
        { q: "Who is the current UN Secretary-General?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Tedros"], correct: 0 },
        { q: "What is the capital of Ukraine?", options: ["Kyiv", "Moscow", "Warsaw", "Berlin"], correct: 0 },
        { q: "Which Indian cricketer is known as 'King Kohli'?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Sachin Tendulkar"], correct: 1 },
        { q: "What is the theme of World Environment Day 2025?", options: ["Land Restoration", "Beat Plastic Pollution", "Ecosystem Restoration", "Sustainable Tourism"], correct: 0 },
        { q: "Which country launched Chandrayaan-3?", options: ["USA", "China", "India", "Russia"], correct: 2 },
        { q: "Who won the Nobel Peace Prize in 2024?", options: ["Nihon Hidankyo", "Malala", "Greta Thunberg", "None"], correct: 0 },
        { q: "What is the currency of the European Union?", options: ["Dollar", "Pound", "Euro", "Yen"], correct: 2 },
        { q: "Which app is banned in India since 2020?", options: ["Instagram", "TikTok", "Snapchat", "Twitter"], correct: 1 },
        { q: "Who is the current President of India (2025)?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "Pratibha Patil"], correct: 0 }
    ],
    "Others": [
        { q: "National animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 1 },
        { q: "Longest river in India?", options: ["Ganga", "Godavari", "Brahmaputra", "Yamuna"], correct: 0 },
        { q: "Who wrote the national anthem?", options: ["Nehru", "Tagore", "Gandhi", "Patel"], correct: 1 },
        { q: "How many states are in India?", options: ["28", "29", "30", "31"], correct: 0 },
        { q: "What is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Jasmine"], correct: 1 },
        { q: "Which festival is called the Festival of Lights?", options: ["Holi", "Diwali", "Navratri", "Eid"], correct: 1 },
        { q: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], correct: 1 },
        { q: "Taj Mahal is located in which city?", options: ["Delhi", "Agra", "Jaipur", "Lucknow"], correct: 1 },
        { q: "What is the national bird of India?", options: ["Peacock", "Eagle", "Sparrow", "Parrot"], correct: 0 },
        { q: "Which is the largest state in India by area?", options: ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Maharashtra"], correct: 1 }
    ]
};

// Rest of the code remains same as the last fixed version I gave you

let currentCategory = "";
let currentDifficulty = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let isAnswered = false;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    document.getElementById(id).classList.add('active');
    document.getElementById(id).classList.remove('hidden');
}

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    Object.keys(QUESTIONS_DB).forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<div class="emoji">📚</div><h3>${cat}</h3>`;
        card.addEventListener('click', () => {
            currentCategory = cat;
            document.getElementById('selected-category-name').textContent = cat;
            showScreen('difficulty-screen');
        });
        grid.appendChild(card);
    });
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentIndex = 0;
    score = 0;
    isAnswered = false;

    currentQuestions = [...QUESTIONS_DB[currentCategory] || QUESTIONS_DB["Others"]];

    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const q = currentQuestions[currentIndex];

    document.getElementById('progress-text').innerHTML = `Question <strong>${currentIndex + 1}</strong> of ${currentQuestions.length}`;
    document.getElementById('progress-fill').style.width = `${(currentIndex / currentQuestions.length) * 100}%`;

    document.getElementById('question-text').textContent = q.q;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<span>${String.fromCharCode(65 + index)}.</span> ${option}`;
        div.addEventListener('click', () => selectAnswer(index, q.correct));
        container.appendChild(div);
    });

    isAnswered = false;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback-message').classList.add('hidden');

    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    let timeLeft = currentDifficulty === 'easy' ? 30 : currentDifficulty === 'medium' ? 45 : 60;
    const timerEl = document.getElementById('timer-value');
    timerEl.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function selectAnswer(selectedIndex, correctIndex) {
    if (isAnswered) return;

    isAnswered = true;
    if (timerInterval) clearInterval(timerInterval);

    const allOptions = document.querySelectorAll('.option');

    allOptions.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === correctIndex) opt.classList.add('correct');
        else if (i === selectedIndex) opt.classList.add('incorrect');
    });

    if (selectedIndex === correctIndex) {
        score++;
        showFeedback("Correct! 🎉", "correct");
    } else {
        showFeedback("Incorrect 😔", "incorrect");
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function handleTimeUp() {
    isAnswered = true;
    const q = currentQuestions[currentIndex];
    const allOptions = document.querySelectorAll('.option');

    allOptions.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === q.correct) opt.classList.add('correct');
    });

    showFeedback("Time's up! ⏰", "incorrect");
    document.getElementById('next-btn').classList.remove('hidden');
}

function showFeedback(text, type) {
    const fb = document.getElementById('feedback-message');
    fb.textContent = text;
    fb.className = `feedback-message ${type}`;
    fb.classList.remove('hidden');
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

function endQuiz() {
    clearInterval(timerInterval);
    showScreen('result-screen');

    const total = currentQuestions.length;
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = `${score}/${total}`;
}

function init() {
    renderCategories();

    document.querySelectorAll('.difficulty-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            startQuiz(level);
        });
    });

    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('quit-btn').addEventListener('click', () => {
        if (confirm('Quit quiz?')) showScreen('category-screen');
    });
    document.getElementById('back-to-category').addEventListener('click', () => showScreen('category-screen'));
    document.getElementById('home-btn').addEventListener('click', () => showScreen('category-screen'));
    document.getElementById('restart-btn').addEventListener('click', () => startQuiz(currentDifficulty));
    document.getElementById('new-quiz-btn').addEventListener('click', () => showScreen('category-screen'));

    console.log("✅ App loaded with 10 questions per category!");
}

window.onload = init;