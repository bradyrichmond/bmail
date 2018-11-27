import React, { Component } from 'react';
import './App.css';
import Bmail from './components/Bmail';
import Sidebar from './components/Sidebar';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bmail-top">
          <Header/>
        </div>
        <div className="bmail-bottom">
          <Sidebar/>
          <Bmail />
        </div>
      </div>
    );
  }
}

export default App;
