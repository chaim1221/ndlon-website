import React from 'react';
import View from './View.jsx';
import styles from './styles.scss';

class <%= componentName %> extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // actions to perform after load
  }

  render() {
    return React.createElement(View, { ...this.state });
  }
}

export default <%= componentName %>;
