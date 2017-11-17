import React, { Component } from 'react';
import './App.css';

//Component
import Main from './Main/main'
import Header from '../Components/Header/header'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
