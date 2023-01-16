// Start with ./
const names = require("./4-names");
const howdy = require("./5-utils");
const data = require("./6-alt_flavors");
require("./7-mind_grenade");

// 01 - BEGIN
let keys = Object.keys(names);
keys.forEach((key) => {
  howdy(names[key]);
});
// 01 - END

// 02 - BEGIN
console.log(data);
// 02 - END
