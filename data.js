const data = [
    {
        "question": "What is the capital of India?",
        "subject": "General Knowledge",
        "topic": "World Capitals",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who is the current Prime Minister of India?",
        "subject": "Politics",
        "topic": "Indian Government",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the largest mammal on Earth?",
        "subject": "Biology",
        "topic": "Marine Life",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "How many continents are there?",
        "subject": "Geography",
        "topic": "World Geography",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "subject": "Literature",
        "topic": "Shakespearean Plays",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the chemical symbol for oxygen?",
        "subject": "Science",
        "topic": "Chemistry",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the square root of 16?",
        "subject": "Mathematics",
        "topic": "Arithmetic",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "In which year did Columbus reach the Americas?",
        "subject": "History",
        "topic": "Exploration",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the currency of Japan?",
        "subject": "Economics",
        "topic": "World Currencies",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who is known as the 'Father of Computers'?",
        "subject": "Technology",
        "topic": "Computer Science",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the largest planet in our solar system?",
        "subject": "Astronomy",
        "topic": "Planets",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "subject": "Culinary Arts",
        "topic": "Food",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Which color is associated with peace?",
        "subject": "Art",
        "topic": "Colors",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the process of photosynthesis?",
        "subject": "Biology",
        "topic": "Botany",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who painted the Mona Lisa?",
        "subject": "Art",
        "topic": "Renaissance Art",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the sum of angles in a triangle?",
        "subject": "Mathematics",
        "topic": "Geometry",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who is the author of 'Harry Potter' series?",
        "subject": "Literature",
        "topic": "Fantasy Novels",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Explain the concept of quantum entanglement.",
        "subject": "Physics",
        "topic": "Quantum Mechanics",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Name three key events of the Renaissance period.",
        "subject": "History",
        "topic": "Renaissance",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Describe the structure of an atom.",
        "subject": "Science",
        "topic": "Atomic Structure",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the working principle of a neural network.",
        "subject": "Technology",
        "topic": "Artificial Intelligence",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Discuss the impact of climate change on biodiversity.",
        "subject": "Environmental Science",
        "topic": "Climate Change",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the major functions of the human digestive system?",
        "subject": "Biology",
        "topic": "Human Anatomy",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the process of cellular respiration.",
        "subject": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Compare and contrast mitosis and meiosis.",
        "subject": "Biology",
        "topic": "Cell Division",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the key principles of democratic governance?",
        "subject": "Political Science",
        "topic": "Democracy",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the concept of supply and demand in economics.",
        "subject": "Economics",
        "topic": "Microeconomics",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Discuss the causes and consequences of the Industrial Revolution.",
        "subject": "History",
        "topic": "Industrial Revolution",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the fundamental principles of coding in Python?",
        "subject": "Programming",
        "topic": "Python",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the process of evolution by natural selection.",
        "subject": "Biology",
        "topic": "Evolution",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Discuss the major themes in Shakespeare's sonnets.",
        "subject": "Literature",
        "topic": "Shakespearean Sonnets",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the principles of object-oriented programming.",
        "subject": "Programming",
        "topic": "OOP",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Discuss the impact of globalization on culture.",
        "subject": "Sociology",
        "topic": "Globalization",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the key components of a persuasive essay?",
        "subject": "English",
        "topic": "Writing",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Derive the Schrödinger equation in quantum mechanics.",
        "subject": "Physics",
        "topic": "Quantum Mechanics",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Discuss the geopolitical implications of the Cold War.",
        "subject": "History",
        "topic": "Cold War",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the process of protein folding and its significance.",
        "subject": "Biology",
        "topic": "Molecular Biology",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Implement a deep learning model for image recognition.",
        "subject": "Technology",
        "topic": "Deep Learning",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Analyze the economic impact of a global pandemic.",
        "subject": "Economics",
        "topic": "Global Economy",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the mathematical basis of general relativity.",
        "subject": "Physics",
        "topic": "General Relativity",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Discuss the ethical implications of gene editing technology.",
        "subject": "Ethics",
        "topic": "Genetic Engineering",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Develop a secure blockchain-based voting system.",
        "subject": "Technology",
        "topic": "Blockchain",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Analyze the social impact of artificial intelligence on employment.",
        "subject": "Sociology",
        "topic": "AI and Employment",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the mathematical principles behind quantum computing.",
        "subject": "Technology",
        "topic": "Quantum Computing",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Discuss the historical development of computer programming languages.",
        "subject": "Programming",
        "topic": "Programming Languages",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Analyze the impact of colonialism on African societies.",
        "subject": "History",
        "topic": "Colonialism",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the principles of algorithmic trading in financial markets.",
        "subject": "Finance",
        "topic": "Algorithmic Trading",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Discuss the ethical considerations in artificial intelligence research.",
        "subject": "Ethics",
        "topic": "AI Ethics",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Analyze the impact of climate change on global food security.",
        "subject": "Environmental Science",
        "topic": "Climate Change",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the principles of dark matter in astrophysics.",
        "subject": "Physics",
        "topic": "Astrophysics",
        "difficulty": "Hard",
        "marks": 15
    }
];

module.exports = data;
