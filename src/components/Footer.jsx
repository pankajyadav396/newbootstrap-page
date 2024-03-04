import React from 'react'
import logo from '../assets/images/webp/logo.webp'
import { Facebook, Insta, Telegram, Twitter } from './common/Svg'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <div className='bg-black1 min-h-360  position-relative z-2 mt_2'>
                <div className='container max-w-1140 pb-5'>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#home"><img src={logo} alt="image" className='mb-3 cursor-pointer' /></a>
                            <p className='fs-sm color-white fw-normal opacity-75 ff-outfit max-w-440 m-0'>Cloopp revolutionizes recycling for everyone. Join, earn, and support sustainability.</p>
                        </div>
                        <div className="col-md-8 mt-4 mt-md-0 d-flex gap-lg-5 gap-md-3 flex-wrap justify-content-md-end">
                            <ul className='p-0 gap-3 d-flex flex-column pe-3'>
                                <li><a href="#about" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>About Us</a></li>
                                <li><a href="#home" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>How It Works</a></li>
                                <li><a href="#brand" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>For Brands</a></li>
                                <li><a href="#career" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Careers</a></li>
                            </ul>
                            <ul className='p-0 gap-3 d-flex flex-column px-3'>
                                <li><a href="#career" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Terms & Conditions</a></li>
                                <li><a href="#career" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Privacy Policy</a></li>
                            </ul>
                            <ul className='p-0 d-flex flex-column gap-3 px-sm-3'>
                                <li><a href="#career" className='home opacity-75 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Follow Us</a></li>
                                <div className='d-flex gap-2'>
                                    <a href="https://www.instagram.com/" target='_blank'><Insta /></a>
                                    <a href="https://www.facebook.com/" target='_blank'><Facebook /></a>
                                    <a href="https://www.twitter.com/" target='_blank'><Twitter /></a>
                                    <a href="https://www.telegram.com/" target='_blank'><Telegram /></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='line'>

                </div>
                <p className=' fw-normal mb-0 text-center fs-sm ff-outfit py-3 color-white opacity-75'>&copy; <span> {year} </span> Cloopp</p>
            </div>
        </>
    )
}

export default Footer