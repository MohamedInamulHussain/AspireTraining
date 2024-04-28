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
Users.unshift("Volunteer");
console.log(Users);

//filter,forEach
Users.filter(n=> n!==undefined).forEach( n => console.log(n));

// Simulated food delivery orders
let orderAmounts = [15, 20, 10, 30, 25, 18];
// filter successful transactions 
//eg: we can take even amount as successfull transaction
let successfulOrders = orderAmounts.filter(amount => amount % 2 === 0);

//add delivery fee of $2 to each successful transaction
let ordersWithFee = successfulOrders.map(amount => amount + 2);

//calculate total reveneue
let totalRevneue = ordersWithFee.reduce((total, amount) => total + amount, 0);

console.log("Total revneue is: $" + totalRevneue);


//indexof
console.log(array.indexOf("Volunteer"));

//splice
let finalArray = numArray.splice(2,2);
console.log(finalArray);
console.log(numArray);

//split
let testString = "Welcome to IFET college of Engineering".split(" ");
console.log(testString);
