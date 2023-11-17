//this json(data) file contain 20% easy,50% medium & 30% hard question
//let 5 marks per easy question , 10 marks per medium question & 15 marks per hard question
//so, accroding to total marks(100) we calculate 4 easy question, 5 hard question & 2 hard level question

const Questions = [
    {
        "question": "What is the capital of India?",
        "subject": "General Knowledge",
        "topic": "World Capitals",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Who is the author of the book 'To Kill a Mockingbird'?",
        "subject": "Literature",
        "topic": "Famous Authors",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the chemical symbol for gold?",
        "subject": "Chemistry",
        "topic": "Elements",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "What is the formula for calculating the area of a circle?",
        "subject": "Mathematics",
        "topic": "Geometry",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "question": "Explain the process of photosynthesis.",
        "subject": "Biology",
        "topic": "Plant Science",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the main causes of World War I?",
        "subject": "History",
        "topic": "World Wars",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Solve the quadratic equation: x^2 - 4x + 4 = 0",
        "subject": "Mathematics",
        "topic": "Algebra",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "Explain the concept of osmosis.",
        "subject": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the key principles of the Theory of Relativity?",
        "subject": "Physics",
        "topic": "Relativity",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "question": "What are the major causes of the Great Depression?",
        "subject": "History",
        "topic": "Economic History",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "question": "Explain the process of protein synthesis in cells.",
        "subject": "Biology",
        "topic": "Genetics",
        "difficulty": "Hard",
        "marks": 15
    }
]
module.exports = Questions;

