// Callback
// Function that accepts another function as a parameter
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
// Output: 1, 3, 2;
