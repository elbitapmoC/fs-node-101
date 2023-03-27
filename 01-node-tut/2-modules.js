// Initially an { } (empty object)
// { } is then updated to store what's exported.
// const names = require("./3-names");
// console.log(names);
// console.log(names.torah);

const { torah, chapters } = require("./3-names");
console.log(torah, chapters);
