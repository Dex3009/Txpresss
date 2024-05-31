import React from 'react'
import './Mynav.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Mynav = () => {
  return (
    <div className='navbar'>
      <div className="leftNav">
        <h2>T <p>Xpress</p></h2>
      </div>

      <div className="MidNav">
        <p>Home</p>
        <p>Contacts</p>
        <p>Booked</p>
        <p>FAQs</p>
      </div>

      <div className="rightNav">
        <p>Follow us</p>
        <p><FaFacebook /></p>
        <p><FaInstagram /></p>
      </div>
    </div>
  )
}

export default Mynav