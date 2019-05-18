import React from 'react';
import { Film } from './Film';

export const FilmsList = ({ films }) => (
    films.map(films => <Film key={film._id} {...film} />)
);