function convertMinutesToHours(minutes, hours) {
  return Math.floor(minutes / 60) + hours;
}

function calculateFinalTime(base, total) {
  return total >= 0 ? total % base : (total % base) + base;
}

class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.setTime(hours, minutes);
  }

  setTime(hours, minutes) {
    const totalHours = convertMinutesToHours(minutes, hours);
    this.hours = calculateFinalTime(24, totalHours);
    this.minutes = calculateFinalTime(60, minutes);
  }

  plus(minutes) {
    const totalMinutes = this.minutes + minutes;
    this.hours = convertMinutesToHours(totalMinutes, this.hours) % 24;
    this.minutes = totalMinutes % 60;
    return this;
  }

  minus(minutes) {
    const totalHours = this.hours - Math.ceil(minutes / 60);
    this.hours = minutes > this.minutes ? calculateFinalTime(24, totalHours) : this.hours;
    this.hours %= 24;
    this.minutes = minutes > this.minutes ? 60 - ((minutes - this.minutes) % 60) : this.minutes - minutes;
    return this;
  }

  equals(clock) {
    return (this.hours === clock.hours && this.minutes === clock.minutes);
  }

  toString() {
    const hour = (`0${this.hours}`).slice(-2);
    const min = (`0${this.minutes}`).slice(-2);
    return `${hour}:${min}`;
  }
}

export function at(hours, minutes = 0) {
  return new Clock(hours, minutes);
}
