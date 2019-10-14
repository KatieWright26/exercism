let finalHours;
let finalMinutes;

const padNumber = num => (`0${num}`).slice(-2);

const reduceHours = (num) => {
  const hours = num > 12 ? num % 12 : num;
  return finalHours = hours;
};

const reduceMinutes = (minutes) => {
  if (minutes >= 60) {
    const additionalHours = Math.floor(minutes / 60);
    const additionalMinutes = minutes % 60;
    finalHours = finalHours + additionalHours;
    return finalMinutes = additionalMinutes;
  } else {
    return finalMinutes = minutes;
  }
};

export const at = (hours, minutes = '00') => {
  reduceHours(hours);
  reduceMinutes(minutes);
  // console.log(finalHours, finalMinutes)
  finalHours > 12 ? reduceHours(finalHours) : finalHours
  return `${padNumber(finalHours)}:${padNumber(finalMinutes)}`;
};
