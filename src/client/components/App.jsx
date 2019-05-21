import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { FilmPage } from './films/FilmPage';
import { GenrePage } from './genres/GenrePage';
import { DirectorPage } from './directors/DirectorPage';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Films collections',
      links: [
        { label: 'Films', url: '/films' },
        { label: 'Directors', url: '/directors' },
        { label: 'Genres', url: '/genres' },
      ],
    }
  }

  render() {
    const { title, links } = this.state;
    return (
      <section>
        <Header title={title} links={links} />
        <main>
          <div>
            <Switch>
              <Route exact path='/' render={() => <FilmPage />} />
              <Route exact path='/films' render={() => <FilmPage />} />
              <Route exact path='/genres' render={() => <GenrePage />} />
              <Route exact path='/directors' render={() => <DirectorPage />} />
            </Switch>
          </div>
        </main>
        <Footer title={title} links={links} />
      </section>
    );
  }
}
