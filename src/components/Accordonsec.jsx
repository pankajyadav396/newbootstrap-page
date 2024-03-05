import ellipse from '../assets/images/webp/3rd-ellipse.webp'

const Accordonsec = () => {
    return (
        <>
            <div className='position-relative z-1 py-5' id='brand'>
                <img src={ellipse} alt="elipsed" className=' position-absolute end-0 z-n1' />
                <div className='container'>
                    <h2 className='fw-semibold fs-lg2 ff-outfit lh-62 color-black1 text-center mt-4 pt-1 mb-4 pb-2'>Frequently Asked Questions</h2>
                    <div class="accordion accordion2 mx-auto  accordion-flush mt-26 bg-transparent border-container" data-aos="zoom-in-up"
                        id="accordionFlushExample2">
                        <div class="accordion-item  accr-item2 bb-2 bg-transparent mt-2 mx-auto" data-aos="zoom-in-up">
                            <h2 class="accordion-header bg-transparent">
                                <button class="accordion-button accordion-butn2 bg-transparent d-flex gap-3 collapsed ff-outfit color-black1 fw-medium fs-md1 " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true"
                                    aria-controls="flush-collapseFour">
                                    What products can I scan?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse show  collapse "
                                data-bs-parent="#accordionFlushExample2">
                                <div class="accordion-body pt-0 max-w-758 ff-outfit color-black1 opacity-75 fw-normal ">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                            </div>
                        </div>
                        <div class="accordion-item accr-item2 bg-transparent mx-auto mt-3" data-aos="zoom-in-up">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-butn2 bg-transparent d-flex gap-3 collapsed  ff-outfit color-black1 fw-medium fs-md1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    Where can I use my rewards? </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse  collapse"
                                data-bs-parent="#accordionFlushExample2">
                                <div class="accordion-body pt-0 max-w-758 ff-outfit color-black1 opacity-75 fw-normal">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                            </div>
                        </div>
                        <div class="accordion-item accr-item2 bg-transparent mx-auto mt-3" data-aos="zoom-in-up">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-butn2 bg-transparent d-flex gap-3 collapsed  ff-outfit color-black1 fw-medium fs-md1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                    What kind of impact can I make? </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse  collapse"
                                data-bs-parent="#accordionFlushExample2">
                                <div class="accordion-body pt-0 max-w-758 ff-outfit color-black1 opacity-75 fw-normal">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                            </div>
                        </div>
                        <div class="accordion-item accr-item2 bg-transparent mx-auto mt-3" data-aos="zoom-in-up">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-butn2 bg-transparent d-flex gap-3 collapsed  ff-outfit color-black1 fw-medium fs-md1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseSeven">
                                    Which brands do you partner with?</button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse  collapse"
                                data-bs-parent="#accordionFlushExample2">
                                <div class="accordion-body pt-0 max-w-758 ff-outfit color-black1 opacity-75 fw-normal">Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordonsec