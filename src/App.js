import React, { Component } from 'react';
import './App.css';

class Posts extends Component {
  state = {
    loaded: false,
  };

  renderPost = (post, index) => <li key={index}>{post.title}</li>;

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
