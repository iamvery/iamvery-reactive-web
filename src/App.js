import React, { Component } from 'react';
import Posts from './Posts';
import './App.css';

class App extends Component {
  state = { loaded: false }

  render() {
    if (this.state.loaded) {
      return (
        <Posts data={['First!', 'Another!']} />
      );
    } else {
      return (
        <span>Loading...</span>
      );
    }
  }
}

export default App;
