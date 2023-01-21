const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "bruce",
    lastName: "wayne",
  };

  // // -----JSON RESPONSE-----
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(superHero));

  // // -----HTML RESPONSE-----
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end("<h1>Hello world</h1>");

  // const html = fs.readFileSync("./index.html", "utf-8");
  // res.end(html);

  // fs.createReadStream("./index.html").pipe(res);

  // let html = fs.readFileSync("./index.html", "utf-8");
  // html = html.replace("{{name}}", superHero.firstName);
  // res.end(html);

  // // -----HTTP ROUTING-----
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superHero));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(9001, () => {
  console.log("server listening");
});
