import React, { Component } from 'react';
import './App.css';
import Header from './components/organisms/header/header';
import Navigation from './components/organisms/navigation/navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;
