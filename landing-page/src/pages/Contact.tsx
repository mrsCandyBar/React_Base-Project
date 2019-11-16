import React, { Component } from 'react';

interface IContactProps {
  classes: any;
}

interface IContactState {
  classes: any;
}

class Contact extends Component<IContactProps, IContactState> {

  constructor(props: IContactProps) {
    super(props);
    this.state = {
      classes: this.props.classes
    }
  }

  render() {
    const { classes } = this.state;
    return (
      <main>
        Contact Page
      </main>
    )
  }
}

export default Contact;