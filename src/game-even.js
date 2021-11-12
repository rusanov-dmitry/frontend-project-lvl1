import readlineSync from 'readline-sync';
import greeting from './cli.js';

const playGameEven = () => {
  const evenAnswer = 'yes';
  const oddAnswer = 'no';
  let correctAnswers = 0;

  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
      if (userAnswer === evenAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${evenAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    } else {
      if (userAnswer === oddAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oddAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default playGameEven;