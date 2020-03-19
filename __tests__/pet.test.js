/* eslint-disable */
const Pet = require("../src/pet");

  const firstPet = new Pet("Fido", 0, 10, 10);
  const secondPet = new Pet("Gojira", 0, 0, 0);

  beforeEach(() => {
    firstPet.age = 0
    firstPet.hunger = 10;
    firstPet.fitness = 10;
    secondPet.age = 0;
    secondPet.hunger = 0;
    secondPet.fitness = 0;
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
    expect(firstPet.hunger).toEqual(15);
    secondPet.growUp();
    expect(secondPet.hunger).toEqual(5);
  });
});

describe("fitness test", () => {
  it("expects fitness to decrease by 3 upon growing up", () => {
    firstPet.growUp();
    expect(firstPet.fitness).toEqual(7);
    secondPet.growUp();
    expect(secondPet.fitness).toEqual(-3);
  });
});

describe("walk test", () => {
  it("expects fitness to increase by 4 upon walking up to a max of 10", () => {
    firstPet.walk();
    expect(firstPet.fitness).toEqual(10);
    secondPet.walk();
    secondPet.walk();
    expect(secondPet.fitness).toEqual(8);
  });
});

describe("feed test", () => {
  it("expect hunger to decrease when pet is fed & hunger not to drop below 0", () => {
    firstPet.feed();
    expect(firstPet.hunger).toEqual(7);
    secondPet.feed();
    expect(secondPet.hunger).toEqual(0);
  });
});

describe("checkUp test", () => {
  it("expects to return a message depending on the pet's hunger and fitness", () => {
    expect(firstPet.checkUp()).toBe("I am hungry");
    firstPet.feed();
    firstPet.feed();
    firstPet.feed();
    expect(firstPet.checkUp()).toBe("I feel great!");
    expect(secondPet.checkUp()).toBe("I need a walk");
    secondPet.growUp();
    secondPet.growUp();
    secondPet.growUp();
    secondPet.growUp();
    expect(secondPet.checkUp()).toBe("I am hungry AND I need a walk");
  });
});
