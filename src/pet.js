const AGE_INCREMENT = 1;
const HUNGER_INCREMENT = 5;
const FITNESS_REDUCTION = 3;
const FITNESS_INCREMENT = 4;
const MAX_FITNESS = 10;
const HUNGER_REDUCTION = 3;
const MIN_HUNGER = 0;
class Pet {
  constructor(name, age = 0, hunger = 0, fitness = 10) {
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.fitness = fitness;
  }
  growUp() {
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_REDUCTION;
  }

  walk() {
    if (this.fitness + 4 >= MAX_FITNESS) {
      this.fitness = 10;
    } else this.fitness += FITNESS_INCREMENT;
  }

  feed() {
    if ((this.hunger - HUNGER_REDUCTION) <= MIN_HUNGER) {
      this.hunger = 0;
    } 
    else this.hunger -= HUNGER_REDUCTION;
  }
}

module.exports = Pet;
