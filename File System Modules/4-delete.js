const { unlink } = require("fs");

unlink("butterfly.txt", (err) => {
  if (err) {
    console.log("Seems like we missed the weekly trash can pickup...");
  }
  console.log("Dunked!");
});
