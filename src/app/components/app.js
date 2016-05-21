import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './main.less';

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps( { fleet } ) {
  return { fleet };
}

export default connect(mapStateToProps, null)(App);
