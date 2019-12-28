const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

class Clock {
  constructor(hours, minutes = 0) {
    this.setTime(hours, minutes);
  }

  setTime(hours, minutes) {
    const totalHours = (Math.floor(minutes / MINUTES_IN_HOUR) + hours);
    const roundedHours = totalHours % HOURS_IN_DAY;
    const roundedMinutes = minutes % MINUTES_IN_HOUR;

    this.hours = roundedHours < 0 ? HOURS_IN_DAY + roundedHours : roundedHours;
    this.minutes = roundedMinutes < 0 ? MINUTES_IN_HOUR + roundedMinutes : roundedMinutes;
  }

  plus(minutes) {
    const addNewMinutes = this.minutes + minutes;
    return new Clock(this.hours, addNewMinutes);
  }

  minus(minutes) {
    const minusNewMinutes = this.minutes - minutes;
    return new Clock(this.hours, minusNewMinutes);
  }

  equals(clock) {
    return (this.hours === clock.hours && this.minutes === clock.minutes);
  }

  toString() {
    const hour = (`0${this.hours}`).slice(-2);
    const minutes = (`0${this.minutes}`).slice(-2);
    return `${hour}:${minutes}`;
  }
}

export function at(hours, minutes = 0) {
  return new Clock(hours, minutes);
}
