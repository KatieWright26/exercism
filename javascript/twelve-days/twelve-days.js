const days = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
   "tenth",
   "eleventh",
   "twelfth"
  ];
  const songOfDays = [
    "a Partridge in a Pear Tree",
    "two Turtle Doves",
    "three French Hens",
    "four Calling Birds",
    "five Gold Rings",
    "six Geese-a-Laying",
    "seven Swans-a-Swimming",
    "eight Maids-a-Milking",
    "nine Ladies Dancing",
    "ten Lords-a-Leaping",
    "eleven Pipers Piping",
    "twelve Drummers Drumming"
  ];

export const recite = (startDay, endDay) => {
  const start = startDay;
  const end = endDay || startDay;
  let carol = [];

  for(let i = start; i <= end; i++) {
    const nth = days[i - 1];
    let verse = songOfDays
          .slice(1, i)
          .reverse()
          .join(", ") +
        ", and " +
        songOfDays[0];
    if(i === 1) {
      verse = songOfDays.slice(0, i);
    }
    carol.push(`On the ${nth} day of Christmas my true love gave to me: ${verse}.\n`);
  }
  return carol.join("\n")
};
