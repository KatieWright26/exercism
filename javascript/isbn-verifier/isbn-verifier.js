const CHECK_NUMBER = "X";
const VALID_ISBN_LENGTH = 10;

export const isValid = (n) => {
  let isbn = n.split("-").join("").split("");

  if (isbn.length !== VALID_ISBN_LENGTH) return false;
  if(!isbn.slice(0, isbn[isbn.length - 1]).map(Number)) return false;

  if (isbn[isbn.length - 1] === CHECK_NUMBER) {
    isbn[isbn.length - 1] = VALID_ISBN_LENGTH;
  }

  const sanitizedIsbn = isbn.map(Number);
  let count = 10;
  let toSum = [];

  for(let i = 0; i < sanitizedIsbn.length; i++) {
    toSum.push(sanitizedIsbn[i] * count);
    count--;
  }
  return toSum.reduce((a,b)=> a + b, 0) % 11 === 0;
};
