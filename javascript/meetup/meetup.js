const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

export const meetupDay = (year, month, day, nth) =>  {
  let correctDate;
  switch(nth) {
    case "teenth":
      correctDate = filterForDates(new Date(year, month, 13), new Date(year, month, 19), day);
      return correctDate[0];
    case 'last':
      correctDate = filterForDates(new Date(year, month + 1, -6), new Date(year, month + 1, 0), day);
      return correctDate[0];
    default:
      let idx = Number(nth[0]) - 1;
      correctDate = filterForDates(new Date(year, month, 1), new Date(year, month + 1, 0), day);
      if(!correctDate[idx]) throw "No Such Date!!!!"
      return correctDate[idx]
  }
}

const filterForDates = (startDate, endDate, day) => {
  let instancesOfDay = [];
  let date = startDate;
  let dateIndex = DAYS.findIndex(d => d === day);
  while(date <= endDate) {
    if(date.getDay() === dateIndex) {
      instancesOfDay.push(date);
    }
    date = incrementCurrentDate(date);
  }
  return instancesOfDay;
}

const incrementCurrentDate = (date) => {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + 1)
  return newDate;
}