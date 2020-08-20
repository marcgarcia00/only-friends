import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Landing Page</p>
      </div>
    )
  }
}

export default connect(state => {
  return {
    state: state,
  }
})(LandingPage);
