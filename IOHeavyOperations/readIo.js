const fs = require("fs");

// const contents = fs.readFileSync("./a.txt", "utf8");
// console.log(contents);

// const file2 = fs.readFileSync("b.txt", "utf-8");
// console.log(file2);

fs.readFile("a.txt", "utf8", (err, data) => {
  console.log(data);
});

fs.readFile("b.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Hi world");
