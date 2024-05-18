const test = require('./test'); 
const readline = require('readline');
const os = require('os');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstName = null;
let lastName = null;
let questionIndex = 0;

rl.question('Enter your first name: ', (inputFirstName) => {
    firstName = inputFirstName.trim();
    rl.question('Enter your last name: ', (inputLastName) => {
        lastName = inputLastName.trim();
        console.log('----------------------------------------------------------------')
        console.log(`          >>>> Welcome ${firstName} ${lastName} <<<< `);
        console.log('----------------------------------------------------------------');
        console.log('*** Begin test: Please enter (true) or (false) as answer ***');
        console.log('----------------------------------------------------------------');
        startTest();
    });
});

// Function for starting the test
function startTest() {
    if (questionIndex < test.length) {
        rl.question(test[questionIndex].text + " (true/false): ", (input) => {
            const userAnswer = input.trim().toLowerCase();
            if (userAnswer === 'true' || userAnswer === 'false') {
                test[questionIndex].userAnswer = userAnswer;
                questionIndex++;
                startTest();
            } else {
                console.log('Invalid answer. Please enter (true) or (false).');
                startTest();
            }
        });
    } else {
        rl.close();
        saveResults();
    }
}

// Function for saving results
function saveResults() {
    let correctCount = 0;
    test.forEach(q => {
        if (q.userAnswer !== undefined && q.correctAnswer !== undefined && q.userAnswer === q.correctAnswer.toLowerCase()) {
            correctCount++;
        }
    });

    const results = {
        firstName: firstName,
        lastName: lastName,
        correctAnswers: correctCount,
        totalQuestions: test.length,
        answers: test.map(q => ({
            question: q.text,
            answer: q.userAnswer,
            correctAnswer: q.correctAnswer
        }))
    };

    const fileName = `${firstName}_${lastName}_test_results`;
    fs.writeFileSync(fileName + ".txt", JSON.stringify(results, null, 2));
    console.log(`Results saved to ${fileName}.txt`);
    console.log(`You got ${correctCount} out of ${test.length} questions correct.`);
}
