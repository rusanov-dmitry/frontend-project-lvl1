import greeting from '../cli.js';
import getAnswerAndCompare from '../index.js';

const playGameGCD = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let answersCount = 0;
  while (answersCount < 3) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const smallestNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

    const condition = `${firstNumber} ${secondNumber}`;
    let correctAnswer = 1;
    for (let i = 2; i <= smallestNumber; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        correctAnswer = i;
      }
    }

    answersCount = getAnswerAndCompare(condition, correctAnswer, answersCount, name);
    if (answersCount === -1) return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGameGCD;
