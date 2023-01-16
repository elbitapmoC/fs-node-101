const names = ["jim", "tam", "corey", "mascarpone"];
// names.forEach((name) => console.log(name));

// once this function is done, it'll call us back(where we initially invoked the function)
// TODO: create a custom for loop callback function, print out each name from names array.
// cb - the number they can reach me at once the job is done.
const forEachName = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cb(element);
  }
};

forEachName(names, (name) => {
  console.log(name);
});
