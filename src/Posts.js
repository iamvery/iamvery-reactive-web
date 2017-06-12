import React, { Component } from 'react';

class Posts extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/iamvery/a46ba7af5cf5e017c6865bc8455ca05a/raw/60fae242a4d531a767c154f1d5d07560103e6e09/feed.json')
      .then((response) => response.json())
      .then((json) => json.posts)
      .then((posts) => this.setState({posts, loaded: true}))
      .catch(console.log)
  }

  renderPost = (post, index) => <li key={index}><a href={post.link}>{post.title}</a></li>;

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

export default Posts;
