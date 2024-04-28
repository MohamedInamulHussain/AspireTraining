//example with food donation system
let donors = [];
const monthlyBudget = 55000;
//add donors
function addDonor(donorName) {
    donors.push(donorName);
    console.log(donorName + " added to the list of donors.");
}
//remove donors
function removeDonor(donorName) {
    const index = donors.indexOf(donorName);
    donors.splice(index, 1);
     console.log(donorName + " removed from the list of donors.");
    
}
//displaY donaors names
function displayDonors() {
    console.log("Donors:");
    console.log(donors);
}
//adding donors
addDonor("hussain");
addDonor("Krishna");
addDonor("Tamil");
addDonor("arun");
displayDonors();
//remove donor
removeDonor("arun");
displayDonors();

// Arrow Function
const calculateBonus = (percentage) => monthlyBudget / percentage;

console.log("Bonus for all: " + calculateBonus(5));

// Callback Functions

function thankYouMessage(donorName, callback) {
    const message = "Thank you, " + donorName + ", for your donation.";
    callback(message);
}

function displayThankYouMessage(message) {
    console.log(message);
}

thankYouMessage("arun", displayThankYouMessage);
