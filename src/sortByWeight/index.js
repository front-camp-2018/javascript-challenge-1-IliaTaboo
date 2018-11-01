/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((firstNum, secondNum) => sumFigures(firstNum) > sumFigures(secondNum));
};

const sumFigures = num => {
  return num.split('').reduce((acc, val) => parseInt(acc) + parseInt(val));
};