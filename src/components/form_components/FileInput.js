import React, { Component } from 'react';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInput: ''
    };
  }

  render() {
    return(
      <label>
        Upload file:
        <input
          type="file"
          ref={input => {
            this.fileInput = input;
          }}
        />
      </label>
    );
  }
}

export default FileInput;
