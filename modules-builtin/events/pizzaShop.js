const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, quantity) {
    this.orderNumber++;
    this.emit("order", size, quantity);
  }

  displayOrderNumber() {
    console.log(`Current order count is ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
