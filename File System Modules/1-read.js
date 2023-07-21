// File system - All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).
const { readFile, readFileSync } = require("fs");

// readFile("hi.txt", (err, data) => {
//   if (err) {
//     console.error("Error reading file", err);
//     return;
//   }
//   console.log(data.toString());
// });

// ----------------------- ALT -----------------------
// readFile("hi.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file", err);
//     return;
//   }
//   console.log(data);
// });
// ----------------------- ALT -----------------------

// ----------------------- SYNC (BLOCKING) -----------------------
try {
  const data = readFileSync("hi.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}
// ----------------------- SYNC (BLOCKING) -----------------------
