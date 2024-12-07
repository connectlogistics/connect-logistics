import React, { useState } from "react";

const OverlayModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>  
        <a style={{ textDecoration: 'none' }} className='scroll-top1 d-flex align-items-center justify-content-center' onClick={openModal} > <i className="bi bi-chat-right-text" style={{ width: '50px' }}></i> Inquiries Here</a>
            
            {isOpen && (
                <div className="overlay" onClick={closeModal}>
                    <div
                        className={`modal-content1 ${isOpen ? "scale-up" : "scale-down"}`}
                        onClick={(e) => e.stopPropagation()}
                        style={{ backgroundColor: '#fff' }}
                    >
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="container section-title1" >
                            <h2>Inquiries</h2>
                        </div>
                        <div className="col-lg-12" style={{ marginTop: '30px' }}>

                            <form action="https://formsubmit.co/" method="post" className="php-email-form" >
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OverlayModal;
