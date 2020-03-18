/* eslint-disable */
const Pet = require("../src/pet");

const firstPet = new Pet("Fido");
firstPet.growUp();
firstPet.growUp();
firstPet.growUp();
const secondPet = new Pet("Gojira", 2, 5, 7);
secondPet.growUp();

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
    expect(firstPet.age).toEqual(3);
  });
});

describe("hunger test", () => {
  it("increases hunger by 5 on growing up", () => {
    expect(firstPet.hunger).toEqual(15);
    expect(secondPet.hunger).toEqual(10);
  });
});

describe("fitness test", () => {
  it("expects fitness to decrease by 3 upon growing up", () => {
    expect(firstPet.fitness).toEqual(1);
    expect(secondPet.fitness).toEqual(4);
  });
});

describe("walk test", () => {
  it("expects fitness to increase by 4 upon walking up to a max of 10", () => {
    firstPet.walk();
    expect(firstPet.fitness).toEqual(5);
    secondPet.walk();
    secondPet.walk();
    expect(secondPet.fitness).toEqual(10);
  });
});
