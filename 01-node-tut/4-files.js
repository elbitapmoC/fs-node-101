// Operating System
const os = require("os");
// console.log(os);

// File System
const fs = require("fs");

// Reading
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data.toString());
});
console.log("Line down low");

// Writing
// IF the file exists, the content within the file will be over written.
// IF the file does NOT exist, the file will be created.
fs.writeFile("./docs/blog1.txt", "Helloooooo NUrse!", () => {
  console.log("File written");
});

// Directories
// If folder does NOT exist, will make the folder
// This is a syncronous method, meaning it'll block the code for a short time
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
}

// Deleting
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
}
