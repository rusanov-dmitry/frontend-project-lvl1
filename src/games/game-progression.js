import greeting from '../cli.js';
import getAnswerAndCompare from '../index.js';

const playGameProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  let answersCount = 0;
  while (answersCount < 3) {
    const progressionList = [];
    const randomIterator = Math.floor(Math.random() * 10);
    const randomProgressionLength = Math.floor(Math.random() * (11 - 5) + 5);
    let progressionNumber = Math.floor(Math.random() * 100);

    for (let i = 0; i <= randomProgressionLength; i += 1) {
      progressionList.push(progressionNumber);
      progressionNumber += randomIterator;
    }

    const missingNumber = progressionList[Math.floor(Math.random() * progressionList.length)];
    const indexOfMissingNumber = progressionList.indexOf(missingNumber);
    progressionList[indexOfMissingNumber] = '..';

    let condition = '';
    progressionList.forEach((element) => {
      condition += `${element} `;
    });

    answersCount = getAnswerAndCompare(condition, missingNumber, answersCount, name);
    if (answersCount === -1) return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGameProgression;
