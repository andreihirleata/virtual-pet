const Pet = require("../src/pet");

describe("constructor", () => {
  const myPet = new Pet("Fido");
  myPet.growUp();
  myPet.growUp();
  myPet.growUp();
  it("returns an object", () => {
    expect(new Pet("Gojira")).toBeInstanceOf(Object);
  });
  it("instatiates an object", () => {
    expect(myPet.name).toEqual("Fido");
  });
  describe("grow up method", () => { 
    expect(myPet.age).toEqual(3);
  }) 
});
