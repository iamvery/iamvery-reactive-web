import React, { Component } from 'react';
import './App.css';

class Posts extends Component {
  state = {
    loaded: false,
  };

  renderPost = (post, index) => <li key={index}>{post.title}</li>;

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/iamvery/a46ba7af5cf5e017c6865bc8455ca05a/raw/60fae242a4d531a767c154f1d5d07560103e6e09/feed.json')
      .then((response) => response.json())
      .then((json) => json.posts)
      .then((posts) => this.setState({posts, loaded: true}))
      .catch(console.log)
  }

  render() {
    if (this.state.loaded) {
      return (
        <ul>
          {this.state.posts.map(this.renderPost)}
        </ul>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

class App extends Component {
  render() {
    return (
      <Posts />
    );
  }
}

export default App;
