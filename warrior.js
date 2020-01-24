export default class Warrior {
  constructor(name, health, weapon) {
    this.name = name;
    this.health = health;
    this.weapon = weapon;
  }

  getName() {
    return this.name;
  }

  getWeapon() {
    return this.weapon;
  }

  takeDamage(damage) {
    return this.health - damage;
  }
}