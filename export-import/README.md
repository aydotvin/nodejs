## Default Export

```
const add = (a, b) => {
  return a + b;
};

module.exports = add;
```

`const addFn = require("./math");`

---

## Named Export

```
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = { add, subtract };
```

```
module.exports.add = (a, b) => {
  return a + b;
};

module.exports.subtract = (a, b) => {
  return a - b;
};
```

`const { add: addFn, subtract, square } = require("./math.js");`

---

## module.exports vs exports
