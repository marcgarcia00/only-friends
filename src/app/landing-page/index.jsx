import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          LandingPage
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(state => {
  return {
    state: state,
  }
})(LandingPage);
