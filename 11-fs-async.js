const { readFile, writeFile, readSync } = require("fs");

// must hav utf coding parameter or will get buffering

readFile("./content/first.txt", "utf8", (err, results) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = results;
  readFile("./content/second.txt", "utf8", (err, results) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = results;
    writeFile(
      "./content/result-async.txt",
      `here is the result: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log(result);
      }
    );
  });
});
