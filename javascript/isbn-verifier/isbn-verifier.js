const CHECK_NUMBER = "X";
const VALID_ISBN_LENGTH = 10;

export const isValid = (n) => {
  let isbn = n.split("-").join("").split("");
  if (isbn.length !== VALID_ISBN_LENGTH) return false;
  if (isbn[isbn.length - 1] === CHECK_NUMBER) {
    isbn[isbn.length - 1] = VALID_ISBN_LENGTH;
  }
  const sanitizedIsbn = isbn.map(Number);
  if(sanitizedIsbn.some(n => Number.isNaN(n))) return false;
  let count = 10;

  return sanitizedIsbn.reduce((acc, num) => {
    if (count > 0) {
      let calc = num * count;
      acc += calc;
      count--;
    }
    return acc;
  }, 0) % 11 === 0;
};
