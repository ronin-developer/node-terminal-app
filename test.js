const { text } = require("stream/consumers");

const test = [
  {
    text: "1. Is JavaScript only a WEB language?",
    correct: false,
    userAnswer: null,
  },
  {
    text: "2. 'typeof null' returns 'object'?",
    correct: true,
    userAnswer: null,
  },
  {
    text: "3. '==' and '===' are the same operators in JavaScript?",
    correct: false,
    userAnswer: null,
  },
  {
    text: "4. 'NaN' === 'NaN' returns true?",
    correct: false,
    userAnswer: null,
  },
  {
    text: "5. 'let' and 'var' have the same level of visibility in scope?",
    correct: false,
    userAnswer: null,
  },
  {
    text: "6. Functions in JavaScript are objects?",
    correct: true,
    userAnswer: null,
  },
  {
    text: "7. In JavaScript, strings are an object type?",
    correct: false,
    userAnswer: null,
  },
  {
    text: "8. 'Array.prototype.sort()' method sorts the array elements numerically by default?",
    correct: false,
    userAnswer: null,
  },
];

module.exports = test;