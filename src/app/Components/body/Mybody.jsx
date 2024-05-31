import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdTwoWheeler } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { FaShieldDog } from "react-icons/fa6";
import './Mybody.css'

const myBody = () => {
  return (
    <div>
       <div className="cards">
          <div className="card1">
            <h5> <FaCarRear size={40}/></h5>
            <h2>FAIR FARES </h2>
            <h4>We are here to prove that people can always come to an agreement. Despite traffic or bad weather, the price for a ride remains fair</h4>
           <p> <span><FaHeart size={25}/></span>
            <span><BsHandThumbsUp size={25}/></span>
            <span> <RiEmotionHappyFill size={25}/></span>
            </p>
          </div>

          <div className="card2">
            <h5><MdTwoWheeler size={40}/></h5>
            <h2>RIDE CONTROL</h2>
            <h4>Our total transparency puts people back in control of their journeys. Passengers and drivers are free to choose each otherr</h4>
            <p> <span><FaHeart size={25}/></span>
            <span><BsHandThumbsUp size={25}/></span>
            <span> <RiEmotionHappyFill size={25}/></span>
            </p>
          </div>

          <div className="card3">
          
            <h5><FaShieldDog size={40} /></h5>
            <h2>EMOTIONAL COMFORT</h2>
            <h4>Fair mutual agreement leads to a friendlier atmosphere and more peace of mind during the ride, for both passengers and drivers.</h4>
            <p> <span><FaHeart size={25}/></span>
            <span><BsHandThumbsUp size={25}/></span>
            <span> <RiEmotionHappyFill size={25}/></span>
            </p>
          </div>
        </div>
       
    </div>
  )
}

export default myBody