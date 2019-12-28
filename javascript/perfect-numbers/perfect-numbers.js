export const classify = (n) => {
  if (n <= 0)  throw new Error(
                 'Classification is only possible for natural numbers.'
               );
  let factors = [];

  for(let f = 1; f < n; f++) {
    if (n % f === 0) {
      factors.push(f);
    }
  }

  let sumFactors = factors.reduce((a, b) => a + b, 0);

  if (sumFactors === n) return 'perfect';
  if (sumFactors > n) return 'abundant';

  return 'deficient';
};
