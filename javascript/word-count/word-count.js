//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = word => {
  const arrOfWords = word.trim().replace(/\W/g, " ").split(/\s+/);
  let wordCount = {};
  arrOfWords.map(word => {
    wordCount[word] ? (wordCount[word] += 1) : (wordCount[word] = 1);
  });
  return wordCount;
};
