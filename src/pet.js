const AGE_INCREMENT = 1;
const HUNGER_INCREMENT = 5;
const FITNESS_REDUCTION = 3;
const FITNESS_INCREMENT = 4;
const MAX_FITNESS = 10;
const HUNGER_REDUCTION = 3;
const MIN_HUNGER = 0;
const FITNESS_THRESHOLD = 3;
const HUNGER_THRESHOLD = 5;

class Pet {
  constructor(name, age = 0, hunger = 0, fitness = 10) {
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.fitness = fitness;
  }

  get isAlive() {
    const MIN_FITNESS = 0;
    const MAX_HUNGER = 10;
    const MAX_AGE = 30;

    return (
      this.age < MAX_AGE &&
      this.hunger < MAX_HUNGER &&
      this.fitness > MIN_FITNESS
    );
  }

  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_REDUCTION;
  }

  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness + 4 >= MAX_FITNESS) {
      this.fitness = 10;
    } else this.fitness += FITNESS_INCREMENT;
  }

  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.hunger - HUNGER_REDUCTION <= MIN_HUNGER) {
      this.hunger = 0;
    } else this.hunger -= HUNGER_REDUCTION;
  }

  checkUp() {
    if (!this.isAlive) {
      return "Your pet is no longer alive :(";
    }
    if (this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD) {
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= FITNESS_THRESHOLD) {
      return "I need a walk";
    } else if (this.hunger >= HUNGER_THRESHOLD) {
      return "I am hungry";
    } else return "I feel great!";
  }
}

module.exports = Pet;
