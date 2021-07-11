import React from 'react';
import '../styles/Header.scss'

export default function Header({scrollToProjects, scrollToResume, scrollToContacts}) {

    return (
        <header className='header' data-aos='fade-down' >
            <ul className='header-list' >
                <li onClick={() => scrollToProjects()} className='header-item text-small' > Projects </li>
                <li className='header-item-line' > </li>
                <li onClick={() => scrollToResume()} className='header-item text-small' > Resume </li>
                <li className='header-item-line' > </li>
                <li onClick={() => scrollToContacts()} className='header-item text-small' > Contacts </li>
            </ul>
        </header>
    );
}
