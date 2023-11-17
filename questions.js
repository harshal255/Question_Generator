const data = require('./data');

// Function to shuffle an array(this function from stackoverflow )
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Function to get random questions based on difficulty and count
const getRandomQuestions = (questions, difficulty, count) => {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    return shuffleArray(filteredQuestions).slice(0, count);
};

//given data
const totalMarks = 100;
const Marks = 5;


// Calculate TotalCount based on the given percentages
const totalCount = totalMarks / Marks;

// Calculate counts for each difficulty level 20% easy, 50 % medium  & 30% hard level question
const easyCount = Math.round(0.2 * totalCount);
const mediumCount = Math.round(0.5 * totalCount);
const hardCount = Math.round(0.3 * totalCount);

// Get random questions for each difficulty level
const easyQuestions = getRandomQuestions(data, 'Easy', easyCount);
const mediumQuestions = getRandomQuestions(data, 'Medium', mediumCount);
const hardQuestions = getRandomQuestions(data, 'Hard', hardCount);

//Spread all questions in an array
const Questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];


module.exports = Questions
