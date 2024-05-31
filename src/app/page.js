
import React from 'react'
import Head from 'next/head'
import Mynav from './Components/Navbar/Mynav'
import Mydashboard from './Components/Dashboard/Mydashboard'





const page = () => {
  return (
    <div> 
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Jacquard+12&family=Rubik+Glitch&display=swap" rel="stylesheet"/>
      </Head>
      <Mynav/>
      <br/>
      <Mydashboard/>

      

    </div>
  )
}

export default page
