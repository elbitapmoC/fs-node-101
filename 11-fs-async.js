// Import Code Module (fs)
const { readFile, writeFile, read, write } = require("fs");

console.log("start");
// Create a new .txt file (async)
readFile("./content_async/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content_async/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content_async/result.text",
      `Results: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Task finished.");
      }
    );
  });
});

console.log("Starting NEXT task.");
