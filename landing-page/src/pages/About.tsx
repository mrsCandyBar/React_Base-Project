import React, { Component } from 'react';

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

export default About;