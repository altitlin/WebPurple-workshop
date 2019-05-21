import React from 'react';
import '../../styles/director.css';

export const Director = ({ fio, age, citizenship }) => (
  <article>
    <h1 className="title-fio">{fio}</h1>
    <span className="age-author">{age}</span>
    <span className="country">{citizenship}</span>
  </article>
);
