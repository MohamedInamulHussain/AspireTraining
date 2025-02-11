const Donation = require('../models/DonationModel');

const Donator = require('../models/DonatorLoginModel'); // Assuming the model file is in the models directory

exports.signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // Check for missing fields
        if (!userName || !email || !password) {
            return res.status(400).json({ msg: 'Please fill all fields', msg_type: 'error' });
        }

        const existingUser = await Donator.findOne({ $or: [{ userName }, { email }] });

        if (existingUser) {
            if (existingUser.userName === userName) {
                return res.status(400).json({ msg: 'Username already exists!', msg_type: 'error' });
            } else if (existingUser.email === email) {
                return res.status(400).json({ msg: 'Email already exists!', msg_type: 'error' });
            }
        }

        const newUser = new Donator({
            userName,
            email,
            password
        });

        await newUser.save();

        return res.status(201).json({ msg: 'User registration successful', msg_type: 'success' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Check for missing fields
        if (!userName || !password) {
            return res.status(400).json({ msg: 'Please enter your username and password', msg_type: 'error' });
        }

        const user = await Donator.findOne({ userName });

        if (!user) {
            return res.status(401).json({ msg: 'User does not exist!', msg_type: 'error' });
        }

        if (password !== user.password) {
            return res.status(401).json({ msg: 'Incorrect password!', msg_type: 'error' });
        }

        return res.status(200).json({ msg: 'Login successful', msg_type: 'success', userName: user.userName });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

// Assuming the Donation and Volunteer share the same model

// Save donation details to the database
exports.saveDonationDetails = async (req, res) => {
    try {
        const {
            foodName,
            quantity,
            cookedTime,
            pickupDate,
            location,
            latitude,
            longitude,
            userId,
            volunteerId,
            foodStatus
        } = req.body;

        // Validate required fields
        if (!foodName || !quantity || !pickupDate || !location || !latitude || !longitude || !userId) {
            return res.status(400).json({ error: 'All required fields must be provided.' });
        }

        const donation = new Donation({
            foodName,
            quantity,
            cookedTime: cookedTime ? new Date(cookedTime) : null,
            pickupDate: new Date(pickupDate),
            location,
            latitude,
            longitude,
            userId,
            volunteerId: volunteerId || null,
            foodStatus: foodStatus || 'Pending'
        });

        await donation.save();
        res.status(201).json({ message: 'Donation details saved successfully!' });
    } catch (error) {
        console.error('Error saving donation details:', error);
        res.status(500).json({ error: 'Failed to save donation details.' });
    }
};

// Display all volunteer donation details
exports.displayVolunteer = async (req, res) => {
    try {
        const donationData = await Donation.find({}); // Fetch all donations; adjust query if needed
        res.status(200).json(donationData);
    } catch (error) {
        console.error('Error fetching donation details:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};
