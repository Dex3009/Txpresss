'use client'
import './Mydashboard.css'
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import MyBody from '../body/Mybody';
import Image from 'next/image';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logp 3.png';
import logo4 from '../assets/logo 4.png';
import { FaHandshake } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { BsTruckFront } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaThumbsUp } from "react-icons/fa";

const dashboard = () => {
  return (
    <div className='dasboard'>
        <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="SwiperPage">
            <div className="plane">
              <h2>frEights</h2>
            </div>
            <div className="text">
              <h4>WE BRING TECH TO YOU  <FaPaperPlane /></h4>
              <h2>WELCOME TO <span>T</span> XPRESS</h2>
              <p>Txpresss provides it users with good and reliable rides 
                ,just place acall and we are Good to go !!
              </p>
              <button>GET STARTED</button>

              <div className="leftNav">
            <h2>T <p>Xpress</p></h2>
            </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="SwiperPage2">
            <div className="plane">
              <h2>Delieveries</h2>
            </div>
            <div className="text">
              <h4>WE ARE AFRICAS BEST <BsTruckFront /> </h4>
              <h2>HERE AT <span>T</span> XPRESS</h2>
              <p>not only Passangers ,  we also help deliver 
                goods in Africa , no space for stories that touch <FaRegFaceLaughSquint size={20}/>!!
              </p>
              <button>GET STARTED</button>

              <div className="leftNav">
        <h2>T <p>Xpress</p></h2>
            </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="SwiperPage3">
            <div className="plane">
              <h2>MAKE A CHOICE ...<FaHandshake /> </h2>
            </div>
            <div className="text">
              <p>HEY !! WHAT ARE YOU WAITING FOR
                BOOK A RIDE NOW !!
              </p>
              <button>GET STARTED</button>

              <div className="leftNav">
        <h2>T Xpress</h2>
            </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        
      </Swiper>

      <div className="patners">
      <p>   <span>Txpress</span>..  also patner with </p>

        <div className="patnersLogo">
          <Image src={logo1}  alt=''  height={40}  width={120}/>
          <Image src={logo2}  alt=''  height={40}  width={120}/>
          <Image src={logo3}  alt='' height={40}  width={120}/>
          <Image src={logo4} alt=''  height={40}  width={120}/>
        </div>
      </div>
    </>
    <MyBody/>
    </div>
  )
}

export default dashboard