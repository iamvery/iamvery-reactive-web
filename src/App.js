import React, { Component } from 'react';
import Posts from './Posts';
import fetchPosts from './PostsData';
import './App.css';

class App extends Component {
  static defaultProps = { fetchPosts }
  state = { loaded: false }

  async componentDidMount() {
    const data = await this.props.fetchPosts();
    this.setState({ data, loaded: true });
  }

  render() {
    if (this.state.loaded) {
      return (
        <Posts data={this.state.data} />
      );
    } else {
      return (
        <span>Loading...</span>
      );
    }
  }
}

export default App;
