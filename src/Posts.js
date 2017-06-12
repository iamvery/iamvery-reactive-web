import React, { Component } from 'react';
import fetchPostsData from './PostsData.js'

class Posts extends Component {
  state = {
    loaded: false,
  };

  async componentDidMount() {
    const posts = await fetchPostsData();
    this.setState({posts, loaded: true});
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
