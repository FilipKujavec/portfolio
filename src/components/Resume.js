import React, { useState, useRef } from 'react';
import '../styles/Resume.scss'
import Background from './Background';

export default function Resume({ forwardRef }) {
    const [emailState, setEmailState] = useState('')
    const submitButtonRef = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            submitButtonRef.current.blur();
        }, 1500);
        
    } 

    return (
        <section className='resume-section' >

            <span ref={forwardRef} className='resume-scroll-ref' />

            <h2 className='text-medium center resume-header' data-aos='fade-up' >Resume</h2>

            <h3 className='email-prompt text-small center' data-aos='fade-right' >
                Enter your e-mail below to have my resume sent to you!
            </h3>

            <div className='flex-center' data-aos='fade-right' >
                <form className='email-input-wrapper' onSubmit={(e) => onSubmit(e)}>

                    <input className='email-input text-small' onChange={(e) => setEmailState(e.target.value)} value={emailState} />

                    <div className='email-icon-wrapper' >
                    <i className='email-icon material-icons-outlined' >
                        email
                    </i>
                    </div>

                    <button ref={submitButtonRef} className='email-sumbit-button' >
                        <i className='email-sumbit-icon material-icons-outlined' >
                            east
                        </i>
                    </button>

                </form>
            </div>

            <Background class='third-background' />
        </section>
    );
}
