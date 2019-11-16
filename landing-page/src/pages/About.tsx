import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  actionCreators } from '../stores/aboutStore';

interface IAboutProps {
  classes: any;
}

interface IAboutState {
  classes: any;
}

class About extends Component<IAboutProps, IAboutState> {

  constructor(props: IAboutProps) {
    super(props);
    this.state = {
      classes: this.props.classes
    }
  }

  render() {
    const { classes } = this.state;
    return (
      <main>
        About Page
      </main>
    )
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(About);