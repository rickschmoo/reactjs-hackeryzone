import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'lime'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <label>
        test dropdown:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
    );
  }
}

export default DropDown;
