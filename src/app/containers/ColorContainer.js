import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Row, Col, Grid, Image } from 'react-bootstrap';

const _ = require('lodash');

class ColorContainer extends Component {

  render() {
    var style = {
      color: 'red',
      fontSize: 200
    };

    return (
      <div className="color-container">
        HELLO WORLD
      </div>
    )
  }
}

function mapStateToProps( { colors } ) {
  return { colors };
}

export default connect(mapStateToProps, actions)(ColorContainer);
