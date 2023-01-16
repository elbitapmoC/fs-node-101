const path = require("path");

console.log(path);

const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
