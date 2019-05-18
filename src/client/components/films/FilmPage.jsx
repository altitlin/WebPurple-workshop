import React from 'react';
import { Film } from './Film';

export class FilmPage extends React.Component {
    state = {};
  
    componentDidMount() {
      fetch(`http://localhost:3030/films`)
        .then(response => response.json())
        .then(response => this.setState({ ...response }))
        // .catch(() => this.setState({ error: 404 }));
    }
  
    render() {
      return this.state.error ? <p>404</p> : <Film {...this.state} />;
    }
  }