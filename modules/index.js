// // require("./add"); //	This will run the add.js file automatically when index.js is run.
// const addFn = require("./add");

// const sum = addFn(3, 3);
// console.log(sum);
// console.log("hello module index.js");

// ==========

// require("./batman");
// require("./superman");

// ==========

// const hero1 = require("./superHero"); //	superhero module gets cached here.
// console.log(hero1.getName());
// hero1.setName("superman");
// console.log(hero1.getName());

// const hero2 = require("./superHero"); //	The next time the module is required, it pulls the module from the cache. So the name returns the above modified one.
// console.log(hero2.getName());

const SuperHero = require("./superHero");
const batman = new SuperHero("batman");
console.log(batman.getName());
batman.setName("bruce");

const superman = new SuperHero("superman");
console.log(superman.getName());
superman.setName("clark");

// ==========
