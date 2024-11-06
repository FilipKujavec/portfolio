import React from 'react';
import '../styles/Resume.scss';
import Background from './Background';

export default function Resume({ forwardRef }) {
  return (
    <section className="resume-section">
      <span ref={forwardRef} className="resume-scroll-ref" />

      <h2 className="text-medium center resume-header" data-aos="fade-up">
        Resume
      </h2>

      <div data-aos="fade-right">
        <h3 className="text-small center">Download my Resume!</h3>

        <a
          className="resume-download-button"
          href="filip.kujavec.com/resume-en"
        >
          <i className="resume-download-icon material-icons-outlined">file_download</i>
          English
        </a>
        <a
          className="resume-download-button"
          href="filip.kujavec.com/resume-de"
        >
          <i className="resume-download-icon material-icons-outlined">file_download</i>
          Deutsch
        </a>
      </div>
      <Background class="third-background" />
    </section>
  );
}
