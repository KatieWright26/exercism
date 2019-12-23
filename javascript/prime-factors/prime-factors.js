//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = num => {
  let primeFactors = [];
  let count = 2;
  let reducedNumber = num;
  while(reducedNumber > 1) {
    if(reducedNumber % count === 0) {
      reducedNumber = reducedNumber / count;
      primeFactors.push(count);
    } else {
      count++;
    }
  }
  return primeFactors
};
