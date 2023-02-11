const greet = (name = "") => {
  console.log(`Hello ${name}! Welcome to earth.`);
};

greet("John");

module.exports = greet;
