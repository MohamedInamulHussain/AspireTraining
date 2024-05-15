
show databases;

// Switch to the 'class' database
use class;

// Show collections 
show collections;

// Insert documents into the 'employee' collection
db.employee.insertOne({"_id":1,"name":"John","department":"Electrical"});
db.employee.insertOne({"_id":2,"name":"Emma","department":"Assembling"});
db.employee.insertMany([
    {"_id":3,"name":"Michael","department":"Electrical"},
    {"_id":4,"name":"Sophia","department":"Assembling"},
    {"_id":5,"name":"William","department":"Marketing"}
]);

// Delete a document with _id: 1 from the 'employee' collection
db.employee.deleteOne({ "_id": 1 });

// Delete documents where department is "Assembling" from the 'employee' collection
db.employee.deleteMany({ "department": "Assembling" });

// Insert multiple documents into the 'employee' collection with unordered insert (ignores duplicates)
db.employee.insertMany([
    {"_id":3,"name":"Michael","department":"Electrical"},
    {"_id":4,"name":"Sophia","department":"Assembling"},
    {"_id":5,"name":"William","department":"Marketing"},
    {"_id":6,"name":"Olivia","department":"Electrical"},
    {"_id":4,"name":"James","department":"Assembling"},
    {"_id":7,"name":"Emily","department":"Electrical"}
], {ordered:false});

// Find all documents in the 'employee' collection
db.employee.find({});

// Rename 'students' collection to 'studentsDetails'
db.students.renameCollection("studentsDetails");

// Drop the 'empDetails' collection
db.empDetails.drop();

// Find all documents 
db.employees.find({});

// where 'emp_name' is "John" 
db.employees.find({"emp_name":"John"});

// where '_id' is 1 or 4 
db.employees.find({"_id":{$in:[1,4]}});

// where '_id' is 1 and 'emp_salary' is less than 40000 
db.employees.find({"_id":1,"emp_salary":{$lt:40000}});

// where 'emp_salary' is 35000 or 40000 
db.employees.find({$or:[{"emp_salary":35000},{"emp_salary":40000}]});

// where '_id' is 1 and 'emp_salary' is 35000 or 40000 
db.employees.find({"_id":1,$or:[{"emp_salary":35000},{"emp_salary":40000}]});

// Delete the database
use class;
db.dropDatabase();
