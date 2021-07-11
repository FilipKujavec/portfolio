import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import Particles from 'react-particles-js';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 750,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <>
//     <Particles />
//     </>
//   </React.StrictMode>,
//   document.getElementById('background')
// );