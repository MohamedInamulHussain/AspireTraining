var event=require('events');
var emitter= new event.EventEmitter();
emitter.on('foodDonation',()=>{
    console.log("Donated Successfully");
})

function foodDonation(){
    console.log("Donate Food");
    console.log("Add food");
    console.log("Cancel Donation");
    emitter.emit('Request Volunteer');
    console.log("thank you");
}
foodDonation();