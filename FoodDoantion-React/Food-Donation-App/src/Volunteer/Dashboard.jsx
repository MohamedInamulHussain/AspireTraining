import React from 'react'
import { Donations } from './Donations'
import { MdLocationOn } from 'react-icons/md'
import './Dashboard.css'
import './Volunteer.css'
export const Dashboard = () => {
    return (
        <>
            <div className='CardBox' style={{ transform: 'scale(0.7)' }}>
                <div className='DashboardCard'>
                    <h1 style={{ fontSize: '60px', marginBottom: '0px', marginTop: '0px' }}>23</h1>
                    <h3 style={{ marginBottom: '0px', marginTop: '-10px', fontWeight:'bolder' }}>Food Donated</h3>
                </div>
                <div className='DashboardCard'>
                    <h1 style={{ fontSize: '60px', marginBottom: '0px', marginTop: '0px' }}>5</h1>
                    <h3 style={{ marginBottom: '0px', marginTop: '-10px',color:'red',fontWeight:'bold' }}>Pending</h3>
                </div>
            </div>
            <div style={{ marginLeft: '26px' }}>
                <span><h5 style={{ position: 'absolute', marginLeft: '10px', backgroundColor: '#f4f4f4', display: 'inline-block', top: '231px', padding: '0px 5px 0px 5px', zIndex: '3' }}>Active Deliveries</h5></span>

                <div className='deliveryListBox'>

                    <div>
                        <div className='DonationCardActive'>
                            {/* Sample Food Donation Card */}
                            <div className="donation-card">
                                <h4>[Food Item Name]</h4>

                                {/* First row: Quantity and Scheduled Time */}
                                <div className="info-row">
                                    <p><strong>Quantity:</strong> 10 meals</p>
                                    <p><strong>Timing:</strong> 10:00 AM </p>
                                    <p><strong>Date:</strong> 10-11-2024 </p>
                                </div>

                                {/* Second row: Pickup Location and Notes */}
                                <div className="info-row">
                                    <p><strong>Address:</strong> 123 Main St, Villupuram</p>

                                    <p><strong>Contact:</strong>9876483456</p>

                                </div>
                                <div className='DonatorLocation' style={{ position: 'relative', top: '-10px' }}><a><MdLocationOn style={{ height: '23px', width: '23px', paddingTop: '10px', color: 'black' }} />
                                    <a style={{ padding: '0px', position: 'absolute', paddingTop: '13px' }}><strong >Click here for location</strong></a></a>
                                </div>

                                {/* Action Buttons */}
                                <div className="action-buttons">
                                    {/* <button className="accept">Accept</button> */}
                                    <button className="cancel">Cancel</button>
                                    <button className="picked-up">Picked Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
