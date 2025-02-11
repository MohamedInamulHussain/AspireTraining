const express = require('express');
const router = express.Router();
const donationControllers = require('../controllers/users');


//login part
router.post('/signup', donationControllers.signup);
router.post('/login', donationControllers.login)
// Route for adding a donation
router.post('/adddonation', donationControllers.saveDonationDetails);

// Route for displaying volunteer data
router.get('/Volunteer', donationControllers.displayVolunteer);

module.exports = router;
