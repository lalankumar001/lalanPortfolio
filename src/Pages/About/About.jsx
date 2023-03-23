
import React from "react";

import { FaUserTie,FaBookOpen } from "react-icons/fa";
import { MdLink } from "react-icons/md";

import styles from './About.module.css';
import Skills from "../Skills/Skills";
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div data-aos="fade-right" className={styles.AboutMeText}>
      {/*About Me Section  */}
      <div className="bg-light">
        <h2 className="text-center mt-2 fs-1 fw-bold">
          <FaUserTie id="Icon" />
        </h2>
        <h1 className="text-left fs-1 fw-bold ml-2 p-2" data-aos="zoom-in-down">About Me</h1>
        <h3 className="AboutMeText p-2 mx-1 text-justify shadow-lg p-3 mb-5 bg-body-tertiary rounded"data-aos="zoom-in-down">
          <span className="fs-1 bg-white fw-bold">H</span>ey there! My name is Lalan
          Kumar, and I have experience in front-end development. I received a
          Bachelor of Computer Application (BCA) degree from the Maharaja Surajmal
          Institute in New Delhi. I'm devoted to developing top-notch online
          apps using the most modern web technologies. I enjoy experimenting
          with and learning about new technologies, and at the moment I am using
          Wordpress and Reactjs to create a full-stack online application.
        </h3>
      </div>
      {/* Experience Section Start */}
      <h1 className="text-left fs-1 fw-bold ml-2 p-3" data-aos="zoom-in-down">Experience</h1>
  {/* internship SECTION */}
  <div className="card px-3 mx-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"data-aos="zoom-in-down">
  <div className="row">
    <div className="col">
      <h4 className='fw-bold text-info p-2'><FaBookOpen /> Internshal Student Patner (ISP)</h4>
      <h4 className="mx-4 fw-semibold">Internshala <a href="https://internshala.com/" target="_blank"><MdLink /></a></h4>
      <h5 className="mx-5 ">Internship | Remote , India</h5>
    </div>
    <div className="col-2">
      <h5 className="mx-3 p-2">Oct 2021 - Dec 2021 </h5>
    </div>
  </div>
</div>
{/* Education section start from here */}
      <h1 className="text-left fs-1 fw-bold ml-2 p-3">Education</h1>
  {/* BCA SECTION */}
  <div className="card px-3 mx-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"data-aos="zoom-in-down">
  <div className="row">
    <div className="col">
      <h4 className='fw-bold text-info p-2'><FaBookOpen /> Bachelors's in Computer Application (BCA)</h4>
      <h4 className="mx-4 fw-semibold">Maharaja Surajmal Institute, GGSIPU <a href="https://www.msijanakpuri.com/" target="_blank"><MdLink /></a></h4>
      <h5 className="mx-5 ">Grade: 8.6 CGPA</h5>
    </div>
    <div className="col-2">
      <h5 className="mx-3 p-2 ">Aug 2019 - Jul 2022</h5>
    </div>
  </div>
</div>
{/* 12th section */}
<div className="card px-3 mx-3 mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"data-aos="zoom-in-down">
  <div className="row">
    <div className="col">
      <h4 className='fw-bold text-info p-2'><FaBookOpen /> 12th Science (PCM)</h4>
      <h4 className="mx-4 fw-semibold">Bihar School Examination Board (BSEB) <a href="http://biharboardonline.bihar.gov.in/" target="_blank"><MdLink /></a></h4>
      <h5 className="mx-5 ">Grade: 57 %</h5>
    </div>
    <div className="col-2">
      <h5 className="mx-3 p-2">jun 2017 - Jul 2018</h5>
    </div>
  </div>
</div>
  {/* skills Component here */}
      <Skills />
      <Footer />
    </div>
  );
};

export default About;