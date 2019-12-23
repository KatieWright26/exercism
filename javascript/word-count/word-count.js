//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = word => {
  const arrOfWords = word
    .toLowerCase()
    .match(/['a-z0-9]+/g)
    .map(word => word.replace(/^'(.*)'$/g, "$1"));

    return arrOfWords.reduce((count, word) => {
    count[word] ? (count[word] += 1) : (count[word] = 1);
    return count;
  }, {});
};
