const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Third parameter, {flag: 'a'}
// Instead of overwritting the file, it'll append to the current file.
// writeFileSync("./content/result-sync.txt", `Results: ${first} ${second}`, {
//   flag: "a",
// });

writeFileSync("./content/result-sync.txt", `Results: ${first} ${second}`);
