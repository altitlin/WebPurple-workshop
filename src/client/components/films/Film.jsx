import React from 'react';
import '../../styles/film.css';

export const Film = ({ title, country, rating, duration, img }) => (
  <article>
    <figure>
      <img src={img} alt={title}/>
      <figcaption>{title}</figcaption>
    </figure>
    <span className="country">{country}</span>
    <div>
      <span className="rating">{rating} звезд</span>
      <span className="time">{duration} мин</span>
    </div>
  </article>
);
