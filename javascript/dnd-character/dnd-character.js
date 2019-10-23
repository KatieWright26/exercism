export const abilityModifier = (roll) => {
  if (roll < 3) throw `Ability scores must be at least 3`;
  if (roll > 18) throw `Ability scores can be at most 18`;
  return Math.floor((roll - 10) / 2);
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = Character.rollAbility();
  }
  static rollAbility() {
    let scores = [];
    for(let i = 0; i < 4; i ++) {
      let score = Math.floor(Math.random() * (7 - 1) + 1);
      scores.push(score);
    }
    scores.sort((a,b) => a < b);
    scores.pop();
    const finalScore = scores.reduce((acc, score) => acc + score, 0)
    return finalScore;
  }

  get strength() {
    return this._strength
  }

  set strength(arg) {
    this._strength = arg;
  }

  get dexterity() {
    return this._dexterity;
  }

  set dexterity(arg) {
    this._dexterity = arg;
  }

  get constitution() {
    return this._constitution;
  }

  set constitution(arg) {
    this._constitution = arg;
  }

  get intelligence() {
    return this._intelligence;
  }

  set intelligence(arg) {
    this._intelligence = arg;
  }

  get wisdom() {
    return this._wisdom;
  }

  set wisdom(arg) {
    this._wisdom = arg;
  }

  get charisma() {
    return this._charisma;
  }

  set charisma(arg) {
    this._charisma = arg;
  }

  get hitpoints() {
    return this._hitpoints;
  }

  set hitpoints(_) {
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }
}
