import React from 'react';
import { FilmsList } from './FilmList';

export class FilmPage extends React.Component {
    state = {
        error: false,
        films: []
    };

    componentDidMount() {
      fetch(`http://localhost:3030/api/films`)
        .then(response => response.json())
        .then(response => this.setState({ films: response }))
        .catch(() => this.setState({ error: true }));
    }

    render() {
      return this.state.error ? <p>404</p> : <FilmsList films={this.state.films} />;
    }
  }