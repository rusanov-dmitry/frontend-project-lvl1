import readlineSync from 'readline-sync';

const getAnswerAndCompare = (condition, correctAnswer, answersCount, name) => {
  console.log(`Question: ${condition}`);
  const userAnswer = readlineSync.question('Your answer: ');

  let count = answersCount;
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    count = -1;
  }

  return count;
};

export default getAnswerAndCompare;
