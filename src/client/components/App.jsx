import React from 'react';
import Cookie from 'universal-cookie';
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { PostPage } from './posts/PostPage';
import { FilmPage } from './films/FilmPage';
import { Panel } from './admin/Panel';
import { Login } from './admin/Login';
import { MainPage } from './MainPage';
import { Edit } from './admin/Edit';
import { sortByDate } from '../helpers';

const cookie = new Cookie();

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
      films: [],
      directors: [],
      genres: [],
    }
  }

  componentDidMount() {
    // this.getVk();
    // this.updatePosts();
  }

  // getVk() {
  //   fetch('http://localhost:3030/api/vk')
  //     .then(response => response.json())
  //     .then(response => this.setState({ vk: response }));
  // }

  // updatePosts = () => {
  //   fetch('http://localhost:3030/api/posts')
  //     .then(response => response.json())
  //     .then(response => this.setState({
  //       posts: response.posts,
  //     }));
  // }
  // onLogin = () => this.forceUpdate();

  render() {
    const { title, links, films, vk } = this.state;
    // const token = cookie.get('token');
    return (
      <section>
        <Header title={title} links={links} />
        <Switch>
          <Route exact path='/' render={() => <FilmPage films={films} />} />
          {/* <Route exact path='/vk' render={() => <MainPage posts={sortByDate(vk)} img={img} />} />
          <Route exact path='/blog' render={() => <MainPage posts={sortByDate(posts)} img={img} />} />
          <Route exact path='/admin' render={token ? () => <Panel update={this.updatePosts} /> : () => <Login onLogin={this.onLogin} />} />
          <Route exact path='/edit' render={token ? (props) => <Edit {...props} update={this.updatePosts} /> : () => <Login onLogin={this.onLogin} />} />
          <Route path='/edit/:url' render={token ? (props) => <Edit {...props} update={this.updatePosts} /> : () => <Login onLogin={this.onLogin} />} />
          <Route path='/:url' render={(props) => <PostPage {...props} />} /> */}
          <Route path='/films' render={() => <FilmPage films={films} />} />
          {/* <Route path='*' render={() => <MainPage movies={sortByDate(posts.concat(vk))} img={img} />} /> */}
        </Switch>
        <Footer title={title} links={links} />
      </section>
    );
  }
}
