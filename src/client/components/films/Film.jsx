import React from 'react';
import '../../styles/film.css';

export const Film = ({ filmName, country, rating, duration }) => (
  <div className="film">
    <section>
      <article>
        <figure>
          <img alt={filmName}/>
          <figcaption>{filmName}</figcaption>
        </figure>
        <span>{country}</span>
        <div>
          <span className="rating">{rating}</span>
          <span className="time">{duration} мин</span>
        </div>
      </article>
    </section>
  </div>
);
