import React, { useRef, useEffect, useState } from 'react';
import '../styles/App.scss';

import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Contacts from './Contacts';
import Name from './Name';

function App() {
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <>
      <Header
        scrollToProjects={() => scrollTo(projectsRef)}
        scrollToResume={() => scrollTo(resumeRef)}
        scrollToContacts={() => scrollTo(contactsRef)}
      />

      <Name />

      <Projects forwardRef={projectsRef} />

      <Resume forwardRef={resumeRef} />

      <Contacts forwardRef={contactsRef} />

      <footer className="footer">
        <div className="flex center">
          <p>© 2021 Filip Kujavec</p>
        </div>
      </footer>
    </>
  );
}

export default App;
