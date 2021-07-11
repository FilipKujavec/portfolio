import React from 'react';
import Background from './Background';

export default function Name() {
    return (
        <section className='name-section' >
            <h1 className='name-header text-large' >Filip Kujavec</h1>
            <h2 className='position-name text-medium' data-aos='fade-right' >Front-End Web Developer</h2>

            <Background class='first-background' />
        </section>

    );
}
