const { rename } = require("fs");

rename("flow.txt", "butterfly.txt", (err) => {
  if (err) {
    console.log("Ali...", err);
  }
  console.log("File renamed! 🦋");
});
