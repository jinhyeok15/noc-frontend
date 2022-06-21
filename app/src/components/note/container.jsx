import React, { Component } from 'react';

function RayoutContainer() {
  return (
    <div className="rayout-container"></div>
  )
}

function MainContainer() {
  return (
    <div className="main-container"></div>
  )
}

function KeywordDetailContainer() {
  return (
    <div className="keyword-detail-container"></div>
  )
}

class Container extends Component {
  render() {
    return (
      <div className="container-screen">
        <RayoutContainer/>
        <MainContainer/>
        <KeywordDetailContainer/>
      </div>
    );
  }
}

export default Container;
