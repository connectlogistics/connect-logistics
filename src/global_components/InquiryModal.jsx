import React, { useState } from "react";

const OverlayModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setStatus('')
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = { name, email, subject, message }
        try {
            if (name !== '' && email !== '' && message !== '') {
                setStatus('Loading...')
                const res = await fetch('/api', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')

                const result = await res.json();


                if (res.ok) {
                    setStatus('Your inquiry was submitted successfully!');

                } else {
                    setStatus(result.error || 'Something went wrong.');
                }
            }
            else{
                setStatus('Some fields are not entered')
            }
        } catch (error) {
            // console.error(error);
            setStatus('Failed to submit your inquiry.');
        }
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
                            <p>{status}</p>
                        </div>
                        <div className="col-lg-12" style={{ marginTop: '30px' }}>

                            <form className="php-email-form" >
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your Email" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} placeholder="Subject" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} required=""></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        {/* <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div> */}

                                        <button type="submit" onClick={handleSubmit}>Send Message</button>
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
