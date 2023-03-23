import React from 'react'
import {FaArrowAltCircleRight,FaTwitter } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div className='mt-5 p-5'>
 {/* contact form here */}
       <div className='container'>
        <h1 className='p-3 shadow rounded text-secondary'>Contact</h1>
        <h1 className='text-info text-center pb-3 mt-5'> <b>Contact</b> Me</h1>
        <div className='container mt-3'>
          <input type="text" name='name' id='name' className='w-100 p-2 shadow rounded-pill' placeholder=' Enter Your Name Here..' />
          <input type="email" name="email" id="email" className='w-100 p-2  shadow rounded-pill mt-3 ' placeholder=' @' />
          <div className='text-center mt-3'>
            <button type="submit" className='w-25 mt-4 p-3 btn btn-primary fs-4'>Send <FaArrowAltCircleRight className='text-dark bg-primary' /></button>
          </div>
        </div>
      </div>
      {/* Form end here */}
     
{/* Socalmedia section start from here */}
<h1 className='fs-2 p-4 text-center shadow mt-2'> And You can connect with me on the following platform:</h1>
<div className='text-center  p-1'>
            <span className='w-25 mt-4 p-3 fs-2'> <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin/></a></span>
            <span className='w-25 mt-4 p-3 fs-2'> <a href="https://github.com/lalankumar001" target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a></span>
            <span className='w-25 mt-4 p-3 fs-2'> <a href="mailto:lalankumaraaryan001@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineMailOutline/></a></span>
            <span className='w-25 mt-4 p-3 fs-2'> <a href="https://twitter.com/Lalan_kumar001?t=Iit0hQtuQDzU1zFKYQ7juw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></span>
          </div>
     
          <div className='w-100 mt-1'>
       <Footer />
       </div>
    </div>
  )
}

export default Contact