import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div>
      {/* <div>Login time is {this.props.now}</div> */} {/* Error */}
      <div>Login time is {props.now}</div>
      Username: <input type="text" value={props.username}/>
      Password: <input type="password" value={props.password}/>
      <textarea name="" id="" cols="30" rows="10">
      HTML `textarea`
      </textarea>
      <textarea name="" id="" cols="30" rows="10" value="React textarea"/>
      <select name="hselect" id="hselect">
      
      <option value="first">First</option>
      <option value="second" selected>Second</option>
      <option value="third">Third</option>
      </select>
    
      <select name="rselect" id="rselect" value="first">
      <option value="first">First</option>
      <option value="second" selected>Second</option>
      <option value="third">Third</option>
      </select>
    </div>
  )
}
