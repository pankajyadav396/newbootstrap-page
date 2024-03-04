import React, { useState } from 'react'
import logo from '../assets/images/webp/logo.webp'

const Navsec = () => {

  const [nav, setNav] = useState(false)
  function show() {
    setNav(!nav)
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden")
    }
    else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  };
  return (
    <>
      <div className='h-90 bg-skyblue w-100 d-flex align-items-center'>
        <div className='container-xl justify-content-center d-flex'>
          <div className='d-flex justify-content-between align-items-center my-auto max-w-1140 w-100'>
            <img src={logo} alt="image" className='cursor-pointer logo' />
            <ul className={`${nav ? "open" : "not-open"
              } d-flex justify-content-center align-items-center m-0 p-0 gap-4 mobileView`}>
              <li><a onClick={show} href="#home" className='home color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>How It Works</a></li>
              <li><a onClick={show} href="#brand" className='home color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>For Brands</a></li>
              <li><a onClick={show} href="#about" className='home color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>About Us</a></li>
              <li><a onClick={show} href="#career" className='home color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Careers</a></li>
            </ul>
            <label className=' d-sm-none cursor-pointer' id='menu' onClick={show}>
              {nav ? (
                <div id='menu' className='relative z-40'>
                  <span className=' span1'></span>
                  <span className=' span2'></span>
                  <span className=' span3'></span>
                </div>
              ) : (
                <div className='relative z-40'>
                  <span className=' span4'></span>
                  <span className='span5'></span>
                  <span className=' span6'></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navsec



