import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarwrapper">
        <div className="companydetails">
        <img src={require("./uilogo.jpeg")} alt="No visible" className="companylogo" />
        <h1 className="pagename">DonorsPage</h1>
        </div>
        <ul className="navigationitems">
            <li className="item">Add New Donation</li>
            <li className="item">Donation Requests</li>
            <li className="item">View All Donations </li>
            <li className="item">Donated</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar