import greeting from '../cli.js';
import getAnswerAndCompare from '../index.js';

const playGameEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let answersCount = 0;
  while (answersCount < 3) {
    const condition = Math.floor(Math.random() * 100);
    const correctAnswer = condition % 2 === 0 ? 'yes' : 'no';

    answersCount = getAnswerAndCompare(condition, correctAnswer, answersCount);
    if (answersCount === -1) return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGameEven;
  