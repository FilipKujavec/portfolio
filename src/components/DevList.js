import React from 'react';

export default function DevList({ list, fadeInSide }) {
  const renderItem = () => {
    return list.map((item) => {
      return (
        <li className='dev-item' key={item[1]}>
          <i className={`dev-icon ${item[0]}`}></i>
          <h3 className='text-tiny'>{item[1]}</h3>
        </li>
      );
    });
  };

  return (
    <ul className='dev-wrapper' data-aos={fadeInSide}>
      {renderItem()}
    </ul>
  );
}
