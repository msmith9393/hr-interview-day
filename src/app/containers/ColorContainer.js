import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Grid, Image } from 'react-bootstrap';

const _ = require('lodash');

class ColorContainer extends Component {
  render() {
    return (
      <div className="color-container">
        meep
      </div>
    )
  }
}

function mapStateToProps( { colors } ) {
  return { colors };
}

export default connect(mapStateToProps, null)(ColorContainer);
