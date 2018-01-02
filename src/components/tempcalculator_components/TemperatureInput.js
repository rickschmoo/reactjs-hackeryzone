import React, { Component } from 'react';

const scaleNames = {
   c: 'Celsius',
   f: 'Fahrenheit'
};

class TemperatureInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <label>
        Enter temperature in {scaleNames[scale]}:
        <input value={temperature}
               onChange={this.handleChange} />
      </label>
    );
  }
}

export default TemperatureInput;
