import React, { Component } from 'react';
import Main from '../Main/index';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <h1 className="App-title">
              TV Series List
            </h1>
          </Link>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
