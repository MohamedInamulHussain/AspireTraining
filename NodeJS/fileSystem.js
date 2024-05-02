
const fs=require('fs');

const path=require('path');
//read file with utf8
fs.readFile(path.join(__dirname,'FoodDonationList.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
//read file with toString
fs.readFile(path.join(__dirname,'FoodDonationList.txt'),(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});
//write file
let content='Abc trust,Futurechild NGO, Teresa Trust';
fs.writeFile('FoodDonationList.txt', content, () =>{
    console.log("Food Donation List Successfully");
});