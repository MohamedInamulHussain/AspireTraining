import React, { useState, useEffect } from 'react';
import './Volunteer.css';
import { MdLocationOn } from "react-icons/md";

export const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:8000/auth/Volunteer'); // Matches your route
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setDonations(data); // Save the fetched data to state
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      {/* Main Content */}
      <div className="main-content">
        <h2>Food Donation List</h2>

        {/* Render donation cards dynamically */}
        {donations.length > 0 ? (
          donations.map((donation, index) => (
            <div key={index} className="donation-card">
              <h4>{donation.foodName || '[Food Item Name]'}</h4>

              {/* First row: Quantity and Scheduled Time */}
              <div className="info-row">
                <p><strong>Quantity:</strong> {donation.quantity || 'N/A'}</p>
                <p><strong>Cooked Time:</strong> {donation.cookedTime ? new Date(donation.cookedTime).toLocaleTimeString() : 'N/A'}</p>
                <p><strong>Pickup Date:</strong> {donation.pickupDate ? new Date(donation.pickupDate).toLocaleDateString() : 'N/A'}</p>
              </div>

              {/* Second row: Pickup Location and Notes */}
              <div className="info-row">
                <p><strong>Address:</strong> {donation.location || 'N/A'}</p>
              </div>

              {/* Location Link */}
              <div className='DonatorLocation' style={{ position: 'relative', top: '-10px' }}>
                <a
                  href={`https://www.google.com/maps?q=${donation.latitude},${donation.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLocationOn style={{ height: '23px', width: '23px', paddingTop: '10px', color: 'black' }} />
                  <span style={{ padding: '0px', position: 'absolute', paddingTop: '13px' }}>
                    <strong>Click here for location</strong>
                  </span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="accept">Accept</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          ))
        ) : (
          <p>No food donations available at the moment.</p>
        )}
      </div>
    </>
  );
};
