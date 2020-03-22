/* eslint-disable */
const Pet = require("../src/pet");

const firstPet = new Pet("Fido", 0, 10, 10);
const secondPet = new Pet("Gojira", 0, 0, 0);

beforeEach(() => {
  firstPet.age = 0;
  firstPet.hunger = 2;
  firstPet.fitness = 10;
  secondPet.age = 0;
  secondPet.hunger = 0;
  secondPet.fitness = 5;
});

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Gojira")).toBeInstanceOf(Object);
  });
  it("instatiates an object", () => {
    expect(firstPet.name).toEqual("Fido");
  });
});

describe("grow up method", () => {
  it("expects age to increase by one upon growing up", () => {
    firstPet.growUp();
    expect(firstPet.age).toEqual(1);
  });
});

describe("hunger test", () => {
  it("increases hunger by 5 on growing up", () => {
    firstPet.growUp();
    expect(firstPet.hunger).toEqual(7);
    secondPet.growUp();
    expect(secondPet.hunger).toEqual(5);
  });
});

describe("fitness test", () => {
  it("expects fitness to decrease by 3 upon growing up", () => {
    firstPet.growUp();
    expect(firstPet.fitness).toEqual(7);
    secondPet.growUp();
    expect(secondPet.fitness).toEqual(2);
  });
});

describe("walk test", () => {
  it("expects fitness to increase by 4 upon walking up to a max of 10", () => {
    firstPet.walk();
    expect(firstPet.fitness).toEqual(10);
    secondPet.walk();
    secondPet.walk();
    expect(secondPet.fitness).toEqual(10);
  });
  it("throws an error if your pet is no longer alive" , () => {
    firstPet.hunger = 10;
    expect(() => firstPet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe("feed test", () => {
  it("expect hunger to decrease when pet is fed & hunger not to drop below 0", () => {
    firstPet.feed();
    expect(firstPet.hunger).toEqual(0);
    secondPet.feed();
    expect(secondPet.hunger).toEqual(0);
  });
});

describe("checkUp test", () => {
  it("expects to return a message depending on the pet's hunger and fitness", () => {
   firstPet.age = 5;
   firstPet.hunger = 9;
   firstPet.fitness = 6;
   expect(firstPet.checkUp()).toEqual("I am hungry");
   firstPet.feed();
   firstPet.feed();
   expect(firstPet.checkUp()).toEqual("I feel great!");
   secondPet.hunger = 9;
   secondPet.fitness = 1;
   expect(secondPet.checkUp()).toEqual("I am hungry AND I need a walk");
   secondPet.feed();
   secondPet.feed();
   secondPet.feed();
   expect(secondPet.checkUp()).toEqual("I need a walk");
  });
  it("returns 'your pet is no longer alive' if your pet is dead (RIP)" , () => {
    secondPet.fitness = 0;
    expect(secondPet.checkUp()).toEqual('Your pet is no longer alive :(');
   }); 
});

describe("isAlive test", () => {
  it("expects pet to die if age is more than 30 or hunger reaches to or fitness gets to 0", () => {
    firstPet.hunger = 10;
    expect(firstPet.isAlive).toEqual(false);
    secondPet.fitness = 5;
    secondPet.hunger = 5;
    expect(secondPet.isAlive).toEqual(true);
  });
});
