const orbits = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.7913,
};

export const age = (planet, period) => {
  const earthYear = 31557600;
  let age;
  if (orbits[planet]) {
    age = (period / earthYear / orbits[planet]).toFixed(2);
  }
  return +age;
};
