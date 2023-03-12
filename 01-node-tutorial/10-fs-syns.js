const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8"); // default is utf8
const second = readFileSync("./content/second.txt", "utf-8");

// If filed does not exist then node will create file by default.
// If file already exist then node will overwrite everything in file

// writeFileSync(
//   "./content/results-sync.txt",
//   `Here is the result : ${first} ${second}`
// );

// If you want to append the file you need to pass a third parameter (options object)
writeFileSync("./content/results-sync.txt", "this is to be appended", {
  flag: "a",
});

// console.log(first);
// console.log(second);
