//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(...args) {
    this.sides = [...args];
  }

  sum() {
    return this.sides.reduce((a, b) => a + b, 0)
  }

  product() {
    return this.sides.reduce((a,b) => a * b, 1)
  }

  isPythagorean() {
    return ((this.sides[0]**2 + this.sides[1]**2) === this.sides[2]**2)
  }

  static where(arg) {
    let maxFactor = arg.maxFactor;
    let minFactor = arg.minFactor || 1;
    let sum = arg.sum || false;
    let factors = [];

    for(let i = minFactor; i < maxFactor; i ++) {
      for(let j = i+1; j < maxFactor; j++) {
        for(let k = j+1; k <= maxFactor; k++) {
          if (!sum && i ** 2 + j ** 2 === k ** 2) {
            factors.push(new Triplet(i, j, k));
          } else if (
            i + j + k === sum &&
            i ** 2 + j ** 2 === k ** 2
          ) {
            factors.push(new Triplet(i, j, k));
          }
        }
      }
    }
    return factors
  }
}
