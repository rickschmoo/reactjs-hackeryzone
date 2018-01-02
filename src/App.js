import React, { Component } from 'react';

import TestForm from './components/TestForm.js';
import TempCalculator from './components/TempCalculator';
import LoginControl from './components/LoginControl.js';
import ListControl from './components/ListControl.js';
import WarningBanner from './components/WarningBanner.js';
import Clock from './components/Clock.js';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showWarning: true,
      list_start: 14,
      list_count: 101
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WarningBanner warn={this.state.showWarning} />
        <div id="content" role="main">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <img src="test.jpg" alt="schmoo"/>
          <h1>Hello, world!</h1>
          <br/>
          <TestForm/>
          <br/>
          <TempCalculator/>
          <br/>
          <Clock/>
          <Clock/>
          <Clock/>
          <br/>
          <LoginControl/>
          <br/>
          <ListControl list_start={this.state.list_start} list_count={this.state.list_count}/>
        </div>
      </div>
    );
  }
}

export default App;
