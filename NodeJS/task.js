//another method for import 
const os=require('os')
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
//path
const path=require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
//parse(it gives complete object)
console.log(path.parse(__filename));
//import calculation file
const calculate=require('./calculation');
console.log(calculate.add(2,3));
console.log(calculate.sub(2,3));
console.log(calculate.mul(2,3));
console.log(calculate.div(2,3));