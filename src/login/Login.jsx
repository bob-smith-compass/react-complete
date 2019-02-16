import React from 'react'

export default function Login(props) {
  return (
    <div>
      {/* <div>Login time is {this.props.now}</div> */} {/* Error */}
      <div>Login time is {props.now}</div>
    </div>
  )
}
