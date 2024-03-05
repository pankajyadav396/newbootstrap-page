import mobile from "../assets/images/webp/mobile-img.webp"
import ellipse from "../assets/images/webp/2nd-ellipse.webp"

const Easycreate = () => {
    return (
        <>
            <div className='pt-5 position-relative' id="about">
                <img src={ellipse} alt="ellipse" className=" position-absolute start-0 z-n1 ellipse2" />
                <h2 className='fs-lg2 fw-semibold px-2 text-center color-black1 ff-outfit lh-62'>Creating a Greener World Is <span className="d-md-block">Now As Easy As 1-2-3</span> </h2>
                <div className='container-lg mt-5'>
                    <div className="max-w-1008 mx-auto">
                        <div className='row justify-content-between'>
                            <div className='col-md-4 col-sm-6 col-8 mx-auto my-auto'>
                                <img src={mobile} alt="image" className="w-100" />
                            </div>
                            <div className="col-md-6 col-sm-10 mx-auto mx-md-0 justify-content-center align-items-center flex-column d-flex d-md-inline mt-5 mt-md-0">
                                <div className="bg-black2 mb-2 mb-md-3 black-box-small d-flex justify-content-center align-items-center">
                                    <p className=" color-yellow ff-outfit fw-semibold fs-md2 m-0">1</p>
                                </div>
                                <p className="color-black1 text-center text-md-start fs-md3 mb-2 pt-1 fw-medium ff-outfit lh-32">Scan The Barcode Before Recycling</p>
                                <p className="color-black3 text-center text-md-start fs-sm3 fw-normal mb-4 mb-md-3 ff-outfit lh-24">Open Cloopp, scan the product's barcode, and rack up points with every item you keep out of the landfill.</p>
                                <div className="bg-black2 mb-2 mb-md-3 black-box-small d-flex justify-content-center align-items-center">
                                    <p className="color-yellow ff-outfit fw-semibold fs-md2 m-0">2</p>
                                </div>
                                <p className="color-black1 text-center text-md-start fs-md3 mb-2 pt-1 fw-medium ff-outfit lh-32">Get Paid For Products You Use</p>
                                <p className="color-black3 text-center text-md-start fs-sm3 mb-4 mb-md-3 fw-normal ff-outfit lh-24">Get rewarded for doing the right thing Your daily items – from plastics to cardboard and beyond – are connected to the Cloopp App.</p>
                                <div className="bg-black2 mb-2 mb-md-3 black-box-small d-flex justify-content-center align-items-center">
                                    <p className="color-yellow ff-outfit fw-semibold fs-md2 m-0">3</p>
                                </div>
                                <p className="color-black1 text-center text-md-start fs-md3 mb-2 pt-1 fw-medium ff-outfit lh-32">Reap The Rewards</p>
                                <p className="color-black3 text-center text-md-start fs-sm3 fw-normal ff-outfit lh-24">Earn exclusive coupons, promo codes, and cashback from the hottest brands and track your environmental impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Easycreate