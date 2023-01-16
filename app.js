// Start with ./
const names = require("./4-names");
const howdy = require("./5-utils");

let keys = Object.keys(names);
keys.forEach((key) => {
  howdy(names[key]);
});
