// const fs = require("node:fs");

//	-----FS CALLBACK-----
// //	Synchronous read
// const fileContent = fs.readFileSync("./file.txt");	//	returns content as a buffer.
// const fileContent = fs.readFileSync("./file.txt", "utf-8"); //	returns content as a text.
// console.log(fileContent);

// // Asynchronous read
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// //	Synchronous write
// fs.writeFileSync("./greet.txt", "Good day");

// //	Asynchronous write
// setTimeout(() => {
//   fs.writeFile("./greet.txt", "Good time", { flag: "a" }, (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("file written");
//     }
//   });
// }, 2000);

// //	-----FS PROMISE-----
// const fs = require("node:fs/promises");

// fs.readFile("./file.txt", "utf-8")
//   .then((fileContent) => {
//     console.log(fileContent);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function readFile() {
//   try {
//     const fileContent = await fs.readFile("./file.txt", "utf-8");
//     console.log(fileContent);
//   } catch (error) {
//     console.log(error);
//   }
// }
// readFile();

//	-----FS STREAM-----
const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
	highWaterMark: 2
});
const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (fileContent) => {
  console.log(fileContent);
  writeableStream.write(fileContent);
});

console.log("last line");
