import React, { Component } from 'react';

import DropDown from './form_components/DropDown.js';
import FileInput from './form_components/FileInput.js';

class TestForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      collectedText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    this.setState({
      collectedText: this.state.collectedText + ' ' + this.state.value
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <DropDown/>
        <br/>
        <FileInput/>
        <br/>
        <input type="submit" value="Submit" />
        <div>
          {this.state.collectedText}
        </div>
      </form>
    );
  }
}


export default TestForm;

