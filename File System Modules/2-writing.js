// File system - All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).
const { writeFile, writeFileSync, appendFile } = require("fs");

const newContent = "\n🧞‍♂️ Alright... enough of the mushy lovey dovey stuff!";
const butterflyContent = "\n🐝 Float like a butterfly! Sting like a Bee!";

// Flag: 'a' - APPEND
// If there's data it won't overwrite, it'll add on to file.
// writeFile("fly.txt", newContent, { flag: "a" }, (err) => {
//   if (err) {
//     console.error("Error reading file", err);
//     return;
//   }
//   console.log("Written and loaded!");
// });

// ----------------------- SYNC (BLOCKING) -----------------------
// try {
//   writeFileSync("fly.txt", newContent);
//   console.log("This ain't what they want.");
// } catch (err) {
//   console.err("Mistakes were made...", err);
// }
// ----------------------- SYNC (BLOCKING) -----------------------

// ----------------------- APPEND -----------------------
appendFile("fly.txt", newContent, (err) => {
  if (err) {
    console.error("You don did it now...", err);
    return;
  }
  console.log("Hip! Hip!");
});

appendFile("butterfly.txt", butterflyContent, (err) => {
  if (err) {
    console.error("You don did it now...", err);
    return;
  }
  console.log("Buzz! Buzz!");
});
// ----------------------- APPEND -----------------------
