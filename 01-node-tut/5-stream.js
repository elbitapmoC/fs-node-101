const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog3.txt");
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("---NEW CHUNK---");
//   console.log(chunk);
//   writeStream.write("\n\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// Shorter way of doing the same thing above ^
// When using pipe, it must be from readStream
readStream.pipe(writeStream);
