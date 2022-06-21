import React, { Component } from 'react';

class KeywordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <input type="text" className="keyword-input" autoFocus/>
        <button type="button" className="keyword-input-button" >
          입력
        </button>
      </>
    );
  }

  submitKeywordInfo() {
    
  }
}

export default KeywordInput;
