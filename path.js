let fs = require('fs');
let stats = fs.statSync("c:\\dog.jpg");
console.log('is file ? ' + stats.isFile());
 
let stats = fs.statSync("c:\\demo");
console.log('is directory ? ' + stats.isDirectory());

