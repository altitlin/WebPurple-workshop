import React from 'react';
import { GenreList } from './GenreList';

export class GenrePage extends React.Component {
    state = {
        error: false,
        genres: []
    };

    componentDidMount() {
      fetch(`http://localhost:3030/api/genres`)
        .then(response => response.json())
        .then(response => this.setState({ genres: response }))
        .catch(() => this.setState({ error: true }));
    }

    render() {
      return this.state.error ? <p>404</p> : <GenreList genres={this.state.genres} />;
    }
  }