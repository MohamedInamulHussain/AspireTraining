import React, { useState } from 'react';
import './FoodRequest.css';

export const FoodRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    location: '',
    quantity: '',
  });

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setUseCurrentLocation(isChecked);

    if (isChecked) {
      // Automatically fetch location when checkbox is checked
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setFormData((prevData) => ({
              ...prevData,
              location: `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
            }));
            setError(null); // Clear any previous errors
          },
          (err) => {
            setError("Failed to get location. Please enable location services.");
            console.error("Geolocation error:", err);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    } else {
      // Clear the location if checkbox is unchecked
      setLocation({ latitude: null, longitude: null });
      setFormData((prevData) => ({
        ...prevData,
        location: '', // Clear the location field
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Food Request Submitted:', formData);
    // Here you would typically send formData to a backend or API
  };

  return (
    <div>
      <div id='arrowBgArea'></div>
      <div className='FormBox'>
        

        
      <form onSubmit={handleSubmit} className="food-request-form">
      <h2>Food Request Form</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            // value={formData.location}
            onChange={handleChange}
            required={!useCurrentLocation} // Only required if not using current location
            readOnly={useCurrentLocation} // Make location field readonly if checkbox is checked
          />
        </div>
        <div>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (in servings)"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        {/* Checkbox for "Use My Current Location" */}
        <label>
          <input
            type="checkbox"
            name="useLocation"
            checked={useCurrentLocation}
            onChange={handleCheckboxChange}
          />
          Use My Current Location
        </label>

        {/* Display location or error */}
        <p id="location">
          {location.latitude && location.longitude ? (
            <>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </>
          ) : (
            error || ' '
          )}
        </p>

        <button type="submit">Submit Request</button>
      </form>
    </div>
    <div className='RequestImageArea'>

    </div>
    </div>
  );
};
