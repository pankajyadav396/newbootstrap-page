import React from 'react'
import Navsec from './Navsec'
import appstore from '../assets/images/webp/appstore.webp'
import playstore from '../assets/images/webp/google-play.webp'
import bottle from '../assets/images/webp/headerimg.webp'
import layer from '../assets/images/webp/header-bottom-layer.webp'
import star from '../assets/images/webp/Starheader.webp'
import arrow from '../assets/images/webp/arrow-head.webp'
import ellipse from '../assets/images/webp/header-ellipse.webp'
const Header = () => {
    return (
        <>
            <div className=' min-h-850 d-flex flex-column bg-skyblue1 pb-xxl-5 position-relative z-1' id='home'>
                <img src={ellipse} alt="ellipse" className=' position-absolute end-0 z-n1 ellipse1' />
                <Navsec />
                <div className='container-xl pt-4 flex-grow-1 mt-xl-5 pt-sm-4 justify-content-center align-items-center d-flex'>
                    <div className='max-w-1140 w-100 mt-lg-0'>
                        <img src={star} alt="star" className=' position-absolute ms-4' />
                        <img src={arrow} alt="star" className=' position-absolute arrow d-none d-md-block' />
                        <div className='row justify-content-between'>
                            <div className='col-md-7 pt-xl-5 mt-lg-4 d-flex justify-content-center justify-content-md-start'>
                                <div>
                                    <h1 className='fs-xl2 fw-semibold color-white lh-83 ff-outfit text-nowrap'>Recycle. Reward.</h1>
                                    <p className='fs-xl fw-normal color-white pb-1 lh-83 ff-rainbow'>With Cloopp</p>
                                    <p className='fs-sm fw-normal color-white lh-24 max-w-448 pt-sm-3 mb-3 ff-outfit'>Get exclusive discounts and coupons from the hottest brands every time you recycle and track your environmental impact with the Cloopp App.</p>
                                    <div className='d-flex gap-3 pt-3'>
                                        <a href="https://play.google.com/store/games?hl=en_IN&gl=US&pli=1" target='_blank'><img src={appstore} alt="image" className='img-play cursor-pointer' /></a>
                                        <a href="https://www.apple.com/in/app-store/" target='_blank'><img src={playstore} alt="image" className='img-play cursor-pointer' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 mt-5 mt-md-4 d-flex justify-content-center justify-content-md-start'>
                                <img src={bottle} alt="image" className='w-100 max-w-530' />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={layer} alt="image" className='max-h-140 position-absolute bottom-0 w-100' />
            </div>
        </>
    )
}

export default Header