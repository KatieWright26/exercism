//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = cc => {
  const MIN_LUHN_LENGTH = 2;

  if (cc.trim().length < MIN_LUHN_LENGTH) return false;

  const sanitizedNumber = cc
  .replace(/\s/g, "")
  .split("")
  .map(Number)
  .reverse();

  const calulateNumber = sanitizedNumber.map((n, i) => {
      if (i % 2 !== 0) {
        let doubled = n * 2;
        n = doubled > 9 ? doubled - 9 : doubled;
      }
      return n;
    }).reduce((num, acc) => acc + num, 0);

  return calulateNumber % 10 === 0 ? true : false;
};
