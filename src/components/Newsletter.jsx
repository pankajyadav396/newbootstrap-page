import React from 'react'
import layer3 from '../assets/images/webp/white-layer2.webp'
import layer from "../assets/images/webp/blacklayer.webp"
import ellipse1 from '../assets/images/webp/4th-ellipse.webp'
import ellipse2 from '../assets/images/webp/6th-ellipse.webp'

const Newsletter = () => {
    return (
        <>
            <div className='position-relative bg-skyblue min-h-701 d-flex z-1' >
                <img src={ellipse1} alt="ellipse" className=' position-absolute d-none d-md-block top-0 start-0' />
                <img src={ellipse2} alt="ellipse" className=' position-absolute d-none d-md-block bottom-0 end-0' />
                <img src={layer3} alt="image" className=' top-0 max-h-140 position-absolute w-100' />
                <img src={layer} alt="image" className=' bottom-0 max-h-140 position-absolute w-100' />
                <div className='container position-relative z-2 d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                    <h2 className='fs-lg2 text-center mb-3 lh-62 ff-outfit color-white fw-semibold'>Subscribe Newsletter</h2>
                    <p className='fs-sm text-center mb-4 pb-2 color-white ff-outfit lh-24 fw-normal'>Subscribe to our newsletter for the latest news, offers, and eco-tips.</p>
                    <form className=' max-w-502 w-100'>
                        <div className='inputbox mx-auto br-10'>
                            <input type="email" className='fs-sm h-100 input color-white ff-outfit' placeholder='Enter Your Email' />
                            <button className='fs-sm bg-white py-3 px-4 color-skyblue1 br-10 fs-sm lh-24 border-0 fw-semibold ff-outfit'>Join</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Newsletter