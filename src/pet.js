class Pet {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    growUp() {
        this.age += 1;
    }
}

module.exports = Pet;