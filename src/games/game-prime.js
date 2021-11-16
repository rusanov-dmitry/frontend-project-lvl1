import greeting from '../cli.js';
import getAnswerAndCompare from '../index.js';

const playGamePrime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let answersCount = 0;
  while (answersCount < 3) {
    const condition = Math.floor(Math.random() * 100);

    let correctAnswer = 'yes';
    if (condition > 1) {
      for (let i = 2; i < condition / 2; i += 1) {
        if (condition % i === 0) correctAnswer = 'no';
      }
    } else {
      correctAnswer = 'no';
    }

    answersCount = getAnswerAndCompare(condition, correctAnswer, answersCount, name);
    if (answersCount === -1) return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGamePrime;
