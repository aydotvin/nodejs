// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// // module.exports = add;	//	Default export
// module.exports = { add, subtract };

module.exports.add = (a, b) => {
  return a + b;
};

module.exports.subtract = (a, b) => {
  return a - b;
};

module.exports.square = (a) => {
  return Math.pow(a, 2);
};
