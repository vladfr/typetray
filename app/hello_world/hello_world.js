import React, { Component } from 'react';
import env from '../env';

export default class HelloWorld extends Component {
 render() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <p className="subtitle">You are in <em>{env.name}</em> environment</p>
    </div>
  );
 }

}