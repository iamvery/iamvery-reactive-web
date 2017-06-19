import React, { Component } from 'react';
import Posts from './Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <Posts data={['First!', 'Another!']} />
    );
  }
}

export default App;
