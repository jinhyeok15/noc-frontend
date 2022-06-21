import React, { Component } from 'react';

import KeywordInput from "./keywordInput";
import Container from "./container";

class Note extends Component {
  render(props) {
    return (
      <main>
        <KeywordInput/>
        <Container/>
      </main>
    );
  }
}

export default Note;
