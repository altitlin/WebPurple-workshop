import React from 'react';
import '../../styles/genre.css';

export const Genre = ({ title, description }) => (
  <article>
    <span className="genre">{title}</span>
    <p className="genre-des">{description}</p>
  </article>
);
