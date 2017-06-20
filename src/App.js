import React, { Component } from 'react';
import Posts from './Posts';
import './App.css';

class App extends Component {
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
