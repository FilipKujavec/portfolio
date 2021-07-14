import React from 'react';
import '../styles/Resume.scss'
import Background from './Background';


export default function Resume({ forwardRef }) {

    return (
        <section className='resume-section' >

            <span ref={forwardRef} className='resume-scroll-ref' />

            <h2 className='text-medium center resume-header' data-aos='fade-up' >Resume</h2>

            <div data-aos='fade-right'>

            <h3 className='text-small center' >
                Download my Resume!
            </h3>

            <a className='resume-download-button' href='https://firebasestorage.googleapis.com/v0/b/portfolio-79deb.appspot.com/o/Filip_Kujavec.pdf?alt=media&token=9fca3cc5-e3a2-411f-a0f0-5daad09e5baa' >
                <i className='resume-download-icon material-icons-outlined' >
                    file_download
                </i>
            </a>

            </div>
            <Background class='third-background' />
        </section>
    );
}
