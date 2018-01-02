import React, { Component } from 'react';

class WarningBanner extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    if (!this.props.warn) {
      return null;
    } else {
      return (
        <div className="warning">
          Warning!
        </div>
      );
    }
  }

}

export default WarningBanner;
