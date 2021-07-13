import React, { useState, useEffect } from 'react';
import '../styles/Resume.scss'
import Background from './Background';

import { db } from '../config/fbConfig'
import { doc, setDoc } from 'firebase/firestore';

export default function Resume({ forwardRef }) {
    const [emailInputState, setEmailInputState] = useState('');
    const [emailButtonClass, setEmailButtonClass] = useState('');
    const [emailInputError, setEmailInputError] = useState('');
    const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState({ isTrue: false, email: ''});

    const onSubmit = async (e) => {
        e.preventDefault();
        setEmailInputError('');

        //Ensure that email is valid
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(emailInputState)) {
            setEmailInputError('Invalid Email');
            return;
        }

        if (formHasBeenSubmitted.isTrue === true && formHasBeenSubmitted.email === emailInputState) {
            setEmailInputError('The resume was already sent to this email address, please be patient.');
            return;
        }

        setEmailButtonClass('button-pressed')

        setTimeout(() => {
            setEmailButtonClass('');
        }, 1500);

        try {
            const docRef = await setDoc(doc(db, 'emails', emailInputState), { email: emailInputState })
        } catch (err) {
            console.error(err);
            setEmailInputError('Failed, the email has most likely already received a resume');
            return;
        }

        setFormHasBeenSubmitted({ isTrue: true, email: emailInputState });
    }

    useEffect(() => {
        setTimeout(() => {
            setEmailInputError(false);
        }, 300);
    }, [emailInputState])

    return (
        <section className='resume-section' >

            <span ref={forwardRef} className='resume-scroll-ref' />

            <h2 className='text-medium center resume-header' data-aos='fade-up' >Resume</h2>

            <h3 className='email-prompt text-small center' data-aos='fade-right' >
                Enter your e-mail below to have my resume sent to you!
            </h3>

            <div className='flex-center' data-aos='fade-right' >
                <form className='email-input-wrapper' onSubmit={(e) => onSubmit(e)}>

                    <input className='email-input text-small' onChange={(e) => setEmailInputState( e.target.value.trim() )} value={emailInputState} />
                    <p className='email-input-error' > {emailInputError} </p>

                    <div className='email-icon-wrapper' >
                        <i className='email-icon material-icons-outlined' >
                            email
                        </i>
                    </div>

                    <button className={`email-submit-button ${emailButtonClass}`} >
                        <i className='email-submit-icon material-icons-outlined' >
                            east
                        </i>
                    </button>

                </form>
            </div>

            <Background class='third-background' />
        </section>
    );
}
