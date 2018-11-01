/* eslint-disable-next-line */
export const doubleNum = num => {
  return isDoubleNum(num) ? num : num * 2;
};

const isDoubleNum = num => {
  const str = num.toString();

  return str.substring(0, str.length / 2) === str.substring(str.length / 2);
};
