import React from 'react'
import { MdLightMode, MdOutlineAddLink } from "react-icons/md";
import { FaUserAlt, FaUserGraduate, FaSchool, FaExternalLinkAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import AltCode from '../../Assets/AltCode.png'
import MailBox from '../../Assets/MailBox.png'
import Ecomm from '../../Assets/Ecommerce.png'
import Expense from '../../Assets/Expense.png'

const Project = () => {
  return (
    <div className='mt-3 p-5 text-danger'>
      <div className='container p-2 mt-2'>
        <h1 className='text-secondary shadow fw-bold p-3 text-center'>Work </h1>
        <h2 className='fw-bold p-3 text-warning'>Personal Projects</h2>
        {/* 1st card  */}
        <div className=' container row w-100'>
          <div className='col shadow'>
            <div className="card text-center">
              <div className="card-header row">
                <div className='col'>
                  <h1 className='text-info fw-bold fs-3'>AltCode</h1>
                </div>
                <div className='col'>
                  <a href="https://altcode-bb81f.web.app/" target='_blank' className="btn btn-primary">LIVE <MdOutlineAddLink className='fs-4 bg-primary' /> </a>
                </div>
                <div className='col text-info'>
                  <h3><IoLogoGithub /></h3>
                </div>
              </div>
              <a href="https://altcode-bb81f.web.app/" target="_blank" rel="noopener noreferrer"> <img src={AltCode} alt="" width='530' /></a>
            </div>
          </div>
          {/* 2nd Card */}
          <div className='col p-5 mx-5 '>
            <div className="card text-center w-100 ">
              <div className="card-header row">
                <div className='col'>
                  <h1 className='text-info fw-bold fs-3'>Mail Box</h1>
                </div>
                <div className='col '>
                  <a href="https://mail-box-client-eight.vercel.app/" target='_blank' className="btn btn-primary">LIVE <MdOutlineAddLink className='fs-4 bg-primary' /> </a>
                </div>
                <div className='col text-info'>
                  <h3><IoLogoGithub /></h3>
                </div>
              </div>
              <a href="https://mail-box-client-eight.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={MailBox} alt="" width='530' /> </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* 3rd card  */}
        <div className=' container row w-100'>
          <div className='col'>
            <div className="card text-center">
              <div className="card-header row">
                <div className='col'>
                  <h1 className='text-info fw-bold fs-3'>Ecommerce</h1>
                </div>
                <div className='col p-1'>
                  <a href="https://e-commerce-nine-gilt.vercel.app/" target="_blank" className="btn btn-primary">LIVE <MdOutlineAddLink className='fs-4  text-white bg-primary' /> </a>
                </div>
                <div className='col text-info'>
                  <h3><IoLogoGithub /></h3>
                </div>
              </div>
              <a href="https://e-commerce-nine-gilt.vercel.app/" target='_blank'> <img src={Ecomm} alt="" width='520' /> </a>
            </div>
          </div>
          {/* 4th Card */}
          <div className='col p-5 mx-5 shadow'>
            <div className="card text-center w-100 ">
              <div className="card-header row">
                <div className='col'>
                  <h1 className='text-info fw-bold fs-4'>Expense Tracker</h1>
                </div>
                <div className='col p-2'>
                  <a href="https://expense-tracker-with-redux.vercel.app/" target="_blank" className="btn btn-primary">LIVE <MdOutlineAddLink className='fs-4 bg-primary' /> </a>
                </div>
                <div className='col text-info'>
                  <h3><IoLogoGithub /></h3>
                </div>
              </div>
              <a href="https://expense-tracker-with-redux.vercel.app/" target="_blank"> <img src={Expense} alt="" width='540' /> </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='text-center'>
        <span className='btn btn-danger '>View More <FaExternalLinkAlt /></span>
      </div>
      <hr className='text-info' />

    </div>
  )
}

export default Project