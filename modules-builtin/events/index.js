// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, quantity) => {
//   console.log(`Order received - ${quantity} ${size} pizza(s)`);
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("serving complementary drinks");
//   }
// });

// console.log("Log at the last line");

// emitter.emit("order-pizza", "large", 3);

//	-----Working with extended event emitter-----

const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, quantity) => {
  console.log(`Order received - ${quantity} ${size} pizza(s)`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", 4);
pizzaShop.displayOrderNumber();
