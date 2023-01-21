const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

export const square = (a) => {
  return Math.pow(a, 2);
};

// export default add;
export default {
  add,
  subtract,
};
