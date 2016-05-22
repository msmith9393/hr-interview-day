import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Row, Col, Grid, Image } from 'react-bootstrap';

const _ = require('lodash');

class ColorContainer extends Component {
  componentWillMount() {
    this.props.actions.fetchColors();
  }

  render() {
    return (
      <div>
        {this.props.colors ? this.props.colors.map((color, index) => {
          var style = {
            color: color.hexValue,
            fontSize: 200
          }
          return (<div style={style} key={index}>
            {color.colorName}
          </div>);
          }) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);
