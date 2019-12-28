/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const msg = message.trim();
  const isShouting = msg === msg.toUpperCase();
  const isQuestion = msg.charAt(msg.length - 1) === "?";
  const isNumber = !msg.match(/[a-zA-Z]+/g);

  if(msg.length === 0) return "Fine. Be that way!";
  if (!isQuestion && isShouting && !isNumber) return "Whoa, chill out!";
  if (isQuestion && !isShouting || isNumber && isQuestion) return "Sure.";
  if (isQuestion && isShouting && !isNumber) return "Calm down, I know what I'm doing!";

  return "Whatever.";
};
