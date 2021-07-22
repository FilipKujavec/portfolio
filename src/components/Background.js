import React from 'react';

export default function Background(props) {
  const width = 382 + 55;
  const height = 382 * (687 / 382);

  return (
    <div className={`background-wrapper ${props.class}`}>
      <svg
        className='background-item svg-left'
        width={width}
        height={height}
        viewBox={`0 0 ${width} 687`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M382 343.5L0.25 686.879V0.120941L382 343.5Z' fill='#C4C4C4' />
      </svg>

      <svg
        className='background-item svg-right'
        width={width}
        height={height}
        viewBox={`0 0 ${width} 687`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 343.5L381.75 0.120972L381.75 686.879L0 343.5Z'
          fill='#C4C4C4'
        />
      </svg>
    </div>
  );
}
