const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (word) => {
  if(word.length < 26) return false;

  const lowerCaseWord = word.toLowerCase();
  const pangram = ALPHABET.split("").filter(letter => !lowerCaseWord.includes(letter))
  return pangram.length === 0;
};