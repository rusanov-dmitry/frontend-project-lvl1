import readlineSync from 'readline-sync';

const getAnswerAndCompare = (condition, correctAnswer, answersCount) => {
  console.log(`Question: ${condition}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    answersCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    answersCount = -1;
  }

  return answersCount;
}

export default getAnswerAndCompare;