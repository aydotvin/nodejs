class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }
}

// module.exports = new SuperHero("batman");
module.exports = SuperHero;
