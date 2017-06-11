import React, { Component } from 'react';
import './App.css';

class Posts extends Component {
  state = {
    posts: [{title: 'First Post!'}],
  };

  renderPost = (post, index) => <li key={index}>{post.title}</li>;

  render() {
    return (
      <ul>
        {this.state.posts.map(this.renderPost)}
      </ul>
    );
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
