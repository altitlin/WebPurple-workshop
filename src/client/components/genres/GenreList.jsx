import React from 'react';
import { Genre } from './Genre';

export const GenreList = ({ genres }) => (
    genres.map(genre => <Genre key={genre._id} {...genre} />)
);