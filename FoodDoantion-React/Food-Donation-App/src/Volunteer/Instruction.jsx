import React from 'react'
import volunteerInstctionPic from '../assets/voltureInstruction.png'
export const Instruction = () => {
    return (
        <>
            <div>
                <div class="instructions-container">
                <img href={volunteerInstctionPic}></img>
                    <h1>Volunteer Instructions</h1>

                    <div class="instruction-step">
                        <span>Review Donation Details:</span> Check the donation request for pickup location, contact information, and food details.
                    </div>
                    <div class="instruction-step">
                        <span>Confirm Pickup:</span> Call or message the donor to confirm the time and address. Verify that the food is properly packaged and ready for transport.
                    </div>
                    <div class="instruction-step">
                        <span>Ensure Food Quality:</span> Confirm the food is fresh, uncontaminated, and within safe handling guidelines.
                    </div>
                    <div class="instruction-step">
                        <span>Transport Safely:</span> Use clean, insulated containers to keep food safe during transit.
                    </div>
                    <div class="instruction-step">
                        <span>Deliver Promptly:</span> Head directly to the designated drop-off point, avoiding delays.
                    </div>
                    <div class="instruction-step">
                        <span>Complete the Pickup in the App:</span> Mark the pickup and delivery as completed in the app, including any notes on the food quality.
                    </div>
                    <div class="instruction-step">
                        <span>Report Issues:</span> If any problems arise, contact support for guidance.
                    </div>

                    <div class="footer-note">
                        Thank you for your valuable contribution in reducing food waste and helping those in need!
                    </div>
                </div>

            </div>
        </>
    )
}
