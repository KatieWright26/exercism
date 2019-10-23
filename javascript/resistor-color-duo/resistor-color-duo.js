const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export const value = (arr) => {
  const total = arr.slice(0,2).map(color => COLORS.findIndex(item => item === color)).join("")
  return Number(total);
};
