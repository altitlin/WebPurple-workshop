import React from 'react';
import { DirectorList } from './DirectorList';

export class DirectorPage extends React.Component {
    state = {
        error: false,
        directors: []
    };

    componentDidMount() {
      fetch(`http://localhost:3030/api/directors`)
        .then(response => response.json())
        .then(response => this.setState({ directors: response }))
        .catch(() => this.setState({ error: true }));
    }

    render() {
      return this.state.error ? <p>404</p> : <DirectorList directors={this.state.directors} />;
    }
}