import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
      <div className="Clock">
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
        <div id="content" role="main">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Hello, world!</h1>
          <Clock/>
          <Clock/>
          <Clock/>
        </div>
      </div>
    );
  }
}
// setInterval(React.render(), 1000);

export default App;
