var Users = ["Donator", "Volunteer", "Admin"];

//length
let lengthOfArray = Users.length;
console.log(lengthOfArray);

//push && pop
Users.push("Public");
console.log(Users);
Users.pop();
console.log(Users);

//delete
Users.push("Public");
delete array[3];
console.log(Users);

//shift && unshift
Users.shift();
console.log(Users);
Users.unshift("ram");
console.log(Users);

//filter,forEach
Users.filter(n=> n!==undefined).forEach( n => console.log(n));

//map,filter,reduce
let numArray = [1,2,3,4,5,6];
let Total = numArray.filter(n=>n%2===0).map(n => n+2).reduce((a,b) => a+b );
console.log("Sum is : " + Total);

//indexof
console.log(array.indexOf("Volunteer"));

//splice
let finalArray = numArray.splice(2,2);
console.log(finalArray);
console.log(numArray);

//split
let testString = "Welcome to IFET college of Engineering".split(" ");
console.log(testString);