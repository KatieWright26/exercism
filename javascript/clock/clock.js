let finalHours;
let finalMinutes;

const padNumber = num => (`0${num}`).slice(-2);

const hoursAreNegetive = (time) => {
  if (time > -24) {
    finalHours = 24 + time;
    return;
  }
  const moduliseTime = time % 24;
  hoursAreNegetive(moduliseTime);
};

const minutesAreNegetive = (time) => {
  const hoursToDeduct = Math.floor(time / 60) % 24;
  const minutesToDeduct = time % 60;
  finalHours = (24 + (finalHours + hoursToDeduct)) % 24;
  finalMinutes = 60 + minutesToDeduct;
};

const reduceHours = (hours) => {
  if (hours < 0) {
    hoursAreNegetive(hours);
    return finalHours;
  }
  finalHours = hours > 12 ? hours % 12 : hours;
  return finalHours;
};

const reduceMinutes = (minutes) => {
  if (minutes < 0) {
    minutesAreNegetive(minutes);
    return finalMinutes;
  }
  const additionalHours = Math.floor(minutes / 60);
  finalMinutes = minutes % 60;
  finalHours += additionalHours;
  return finalMinutes;
};

export const at = (hours, minutes = '00') => {
  reduceHours(hours);
  reduceMinutes(minutes);
  finalHours = finalHours >= 24 ? reduceHours(finalHours) : finalHours;
  return `${padNumber(finalHours)}:${padNumber(finalMinutes)}`;
};
