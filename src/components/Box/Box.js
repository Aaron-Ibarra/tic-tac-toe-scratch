import React from 'react';
import './Box.css';

export default function Box({ content }) {
  return (
    <>
      <div className="box">{content}</div>
    </>
  );
}
