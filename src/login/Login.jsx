import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div>
      {/* <div>Login time is {this.props.now}</div> */} {/* Error */}
      <div>Login time is {props.now}</div>
    </div>
  )
}
