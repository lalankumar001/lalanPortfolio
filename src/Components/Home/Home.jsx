import React from 'react'
import { MdLightMode } from "react-icons/md";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import styles from './Home.module.css';



const Home = () => {
  // Dark mode Toggle button handler
  const darkModeHandler = () => {
    var element = document.body;
    element.classList.toggle(styles["dark"]);
  };
  return (
    <div>
      <div className={styles.Hero}>
        <h1> I'm Lalan Kumar
          <br />
          <p className='fs-4 fw-bold p-2'>A Creative Front End Developer & Content Writer. </p>
{/* Socalmedia on Home Hero section  */}
          <div className='row ' id={styles['SocalMedia']}>
            <div className='col-1'>
              <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                <IoLogoLinkedin />
              </a>
            </div>
            <div className='col-1 '>
              <a href="https://github.com/lalankumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                <IoLogoGithub />
              </a>
            </div>

            <div className='col-1'>
              <a href="mailto:lalankumaraaryan001@gmail.com" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                <SiGmail />
              </a>
            </div>
          </div>
        </h1>
      </div>
      <div>
        <h6 className={styles['darkModeToggle']} title='Theme Toggler' ><MdLightMode onClick={darkModeHandler} /></h6>
      </div>
      <div className={styles['AboutSection']}>
        <div className='container row'>
           <div className='col'>
            <h1>Hey boy are you excited to see me?</h1>
           </div>
           <div className='col'>
            <p>Yes i am</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home