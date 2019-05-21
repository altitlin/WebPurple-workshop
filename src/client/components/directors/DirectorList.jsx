import React from 'react';
import { Director } from './Director';

export const DirectorList = ({ directors }) => (
    directors.map(director => <Director key={director._id} {...director} />)
);