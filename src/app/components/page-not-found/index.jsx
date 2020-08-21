import React, { Component } from 'react'
import { connect } from 'react-redux'

class PageNotFound extends Component {
  render() {
    return (
      <div>
        Page not found :(
      </div>
    )
  }
}

export default connect(state => {
  return {
    state: state,
  }
})(PageNotFound);
