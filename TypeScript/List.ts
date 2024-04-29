//sample list of food donation users
var users=['donator','volunteer','NGO','Admin'];

//pop method
users.pop('Admin');
console.log(users);

//push method to add value inside the list
users.push('Admin');
console.log(users);

//to find the index of the specific users
let donatorIndex = users.indexOf('donator');
console.log(donatorIndex);

// Removes one element at index 1
users.splice(2, 2);
console.log(users);

var users=['donator','volunteer','NGO','Admin'];

//forEach method
users.forEach(user => console.log(user));

//find index method
 let index = users.findIndex(position => position === 'NGO');
 console.log(index);
 
 //find users using find method
let findUser = users.find(user => user === 'Admin');

let userId=[101,102,103,104,105];
//filter method
 let filteredUsers = userId.filter(num => num > 100);
  console.log(filteredUsers);

// Copies elements from index 1 to index 4
let slicedId = userId.slice(1, 4);
console.log(slicedId);
