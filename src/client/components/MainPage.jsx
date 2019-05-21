import React from 'react';
import { FilmList } from './films/FilmList';

export const MainPage = ({ films }) => (
  <div className="main">
    <FilmList films={films} />
  </div>
);