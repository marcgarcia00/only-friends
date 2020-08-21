import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    console.log('e', e.target.value);
  }

  render() {
    let menuOptions = ["Login"];

    return (
      <div className="header-container">
        <div className="header-contents c-align-right">
          <Row>
            <div className="logo-container">
              <Col>
                <Link to="/">
                  <div className="logo">ONLY FRIENDS</div>
                </Link>
              </Col>
            </div>
            <Col>
              <div className="menu-options">
                <Link to="/">
                  <span>
                    LOGIN
                </span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;