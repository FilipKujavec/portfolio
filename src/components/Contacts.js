import React from 'react';
import '../styles/Contacts.scss'

export default function Contacts({ forwardRef }) {
    return (
        <section className='contacts-section' >
            <span ref={forwardRef} className='contacts-scroll-ref' />
            <div className='contacts-wrapper' data-aos='fade-up' >
                <h2 className='text-medium center contacts-header' >Contacts</h2>

                <ul className='contacts-list' >
                    <li className='contacts-item' >
                        <a className='contacts-link' href='mailto:Filip@Kujavec.com' target='_blank' rel='noreferrer' >
                            <i className='contacts-icon material-icons-outlined' >email</i> 
                            <h3 className='contacts-text text-small' >Filip@Kujavec.com</h3>
                        </a>
                    </li>

                    <li className='contacts-item contacts-item' >
                        <a className='contacts-link' href='http://github.kujavec.com' target='_blank' rel='noreferrer' >
                            <i className='contacts-icon devicon-github-original' ></i> 
                            <h3 className='contacts-text text-small' >Filip Kujavec</h3>
                        </a>
                    </li>

                    
                    <li className='contacts-item' >
                        <a className='contacts-link' href='http://linkedin.kujavec.com' target='_blank' rel='noreferrer' >
                            <svg className='contacts-icon linkedin-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ><path d='M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z'/></svg>
                            <h3 className='contacts-text text-small' >Filip Kujavec</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
