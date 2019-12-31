export const classify = (n) => {
  if (n <= 0)  throw new Error(
                 'Classification is only possible for natural numbers.'
               );
  let factors = 0;

  for(let f = 1; f < n; f++) {
    if (n % f === 0) {
      factors += f;
    }
  }

  if (factors === n) return 'perfect';
  if (factors > n) return 'abundant';

  return 'deficient';
};
