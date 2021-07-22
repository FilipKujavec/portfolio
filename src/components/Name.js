import React, { useEffect, useState } from 'react';
import Background from './Background';

export default function Name() {
  const [positionName, setPositionName] = useState('');
  const [counter, setCounter] = useState(0);
  const positionNameArr = 'Front-End Deeve___veloper'.split('');

  useEffect(() => {
    if (counter === positionNameArr.length) return;

    const char = positionNameArr[counter];

    // Wait until the animations are done
    const timeout = counter === 0 ? 400 : 0;

    const deleteLastChar = () => {
      const newPositionNameArr = positionName.split('');
      newPositionNameArr.splice(newPositionNameArr.length - 1, 1);
      setPositionName(newPositionNameArr.join(''));
    };

    //Timeout for intial load
    setTimeout(() => {
      const time = char === ' ' || char === '_' ? 70 : Math.random() * (60 - 10) + 100;

      setTimeout(() => {
        if (char === '_') {
          deleteLastChar();
          return;
        }

        setPositionName(positionName + char);
      }, time);

      setCounter(counter + 1);
    }, timeout);
  }, [positionName]);

  return (
    <section className="name-section">
      <h1 className="name-header text-large">Filip Kujavec</h1>
      <h2 className="position-name text-medium" data-aos="fade-right">
        {' '}
        {positionName}{' '}
      </h2>

      <Background class="first-background" />
    </section>
  );
}
