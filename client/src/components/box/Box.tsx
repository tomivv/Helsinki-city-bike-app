import React from 'react';
import './Box.css';

interface props {
  title: string,
  body: string
}

function Box({ title, body }: props) {
  return (
    <div className='box'>
      <p className='box-title'>{title}</p>
      <p className='box-text'>{body}</p>
    </div>
  );
}

export default Box;