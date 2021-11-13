import greeting from '../cli.js';
import getAnswerAndCompare from '../index.js';

const playGameCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];
  let answersCount = 0;
  while (answersCount < 3) {
    const firstOperand = Math.floor(Math.random() * 10);
    const secondOperand = Math.floor(Math.random() * 10);
    const randomOperation = operations[Math.floor(Math.random()*operations.length)];
    const condition = `${firstOperand} ${randomOperation} ${secondOperand}`;
    let correctAnswer = 0;
    if (randomOperation === '+') {
      correctAnswer = firstOperand + secondOperand;
    } else if (randomOperation === '-') {
      correctAnswer = firstOperand - secondOperand;
    } else {
      correctAnswer = firstOperand * secondOperand;
    }

    answersCount = getAnswerAndCompare(condition, correctAnswer, answersCount);
    if (answersCount === -1) return;
  }

  console.log(`Congratulations, ${name}!`);
}

export default playGameCalc;