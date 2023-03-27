// GLOBALS - NO WINDOW!
//
// __dirname    - path for current directory
// __filename   - file name
// require      - function to use modules
// module       - info about current module (container)
// process      - info about env where the program's being excecuted

console.log(`Current DIR:${__dirname}`);
console.log(`File Name:${__filename}`);

// GLOBAL Obj
// console.log(global);

// ---
// setTimeout (method to global)
// ---
// global.setTimeout(() => {
//   console.log("In");
// }, 3000);

// ---
// setInterval (method to global)
// ---
let i = 1;
const interval = global.setInterval(() => {
  console.log(i);
  i++;
}, 3000);
