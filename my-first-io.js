  
const fs = require("fs");
const file = fs.readFileSync(process.argv[2]);
const str = file.toString();
console.log(str.split("\n").length - 1);