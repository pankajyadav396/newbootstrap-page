import layer from '../assets/images/webp/white-layer2.webp'
import layer2 from '../assets/images/webp/header-bottom-layer.webp'
import bottle from '../assets/images/webp/recycleimg.webp'
import { Earth, Exclusive, Thumb } from './common/Svg'
const Recycling = () => {
    return (
        <>
            <div className=' position-relative pt-5 bg-skyblue1 d-flex min-h-850' id='career'>
                <img src={layer} alt="img" className='position-absolute top-0 w-100 max-h-140' />
                <img src={layer2} alt="img" className='position-absolute bottom-0 w-100 max-h-140' />
                <div className='container-lg my-auto d-flex align-items-center justify-content-center h-100 flex-column'>
                    <h2 className='fs-lg2 d-block d-md-none mt-5 pt-5 fw-semibold color-white lh-62 mt-5 mt-md-0 text-center ff-outfit'>Recycling Has Never Been This Easy and Rewarding</h2>
                    <div className='row flex-column-reverse flex-md-row pb-5 pb-md-0 mb-5 mb-md-0 w-100 mt-5'>
                        <div className="col-md-7 col-12 p-0 mt-4 mt-md-0">
                            <h2 className='fs-lg2 d-none d-md-block fw-semibold color-white lh-62 mt-5 mt-md-0 ff-outfit mb-4 pb-2'>Recycling Has Never Been This Easy and Rewarding</h2>
                            <div class="accordion accordion1 me-auto max-w-513  accordion-flush mt-26 bg-transparent border-container" data-aos="zoom-in-up"
                                id="accordionFlushExample">
                                <div class="accordion-item bb-2 bg-transparent mt-2 mx-auto" data-aos="zoom-in-up">
                                    <h2 class="accordion-header bg-transparent">
                                        <button class="accordion-button accordion-btn1 bg-transparent d-flex gap-3 collapsed ff-outfit color-white fw-600 fs-md3 " type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true"
                                            aria-controls="flush-collapseOne">
                                            <Exclusive /> Exclusive Coupons & Rewards
                                        </button>

                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse show ps-sm-2 collapse "
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body ms-sm-5 pt-0 ff-outfit color-white max-w-440 opacity-75 fw-normal fs-sm3 ">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                                    </div>
                                </div>
                                <div class="accordion-item mx-auto bb-2 mt-2 bg-transparent" data-aos="zoom-in-down">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button accordion-btn1 d-flex gap-3 bg-transparent collapsed ff-outfit color-white fw-600 fs-md3" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                            aria-controls="flush-collapseTwo">
                                            <Earth />Track Your Environmental Impact </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse ps-sm-2 bg-transparent collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body ff-outfit color-white  ms-sm-5 pt-0 max-w-440 opacity-75 fw-normal fs-sm3">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                                    </div>
                                </div>
                                <div class="accordion-item bb-2 bg-transparent mx-auto mt-2" data-aos="zoom-in-up">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button accordion-btn1 bg-transparent d-flex gap-3 collapsed  ff-outfit color-white fw-600 fs-md3" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                            aria-controls="flush-collapseThree">
                                            <Thumb /> Feel Good </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse ps-sm-2 collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body pt-0 ff-outfit color-white ms-sm-5 pt-0 max-w-440 opacity-75 fs-sm3 fw-normal">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-0 d-flex align-items-center justify-content-center">
                            <img src={bottle} alt="image" className='w-100 max-w-502' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recycling