// import add from "./math-esm.mjs";
// import math from "./math-esm.mjs";
import math, { square } from "./math-esm.mjs";
const { add, subtract } = math;

// console.log(add(2, 3));
// console.log(math.add(3, 3));
console.log(add(3, 3));
console.log(square(3));
