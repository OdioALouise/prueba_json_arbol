import React from 'react';
import SimpleCounter from './SimpleCounter';
import SanchoPanza from './SanchoPanza';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
        <SimpleCounter />
        <SanchoPanza />
      </div>
    );
  }
}
