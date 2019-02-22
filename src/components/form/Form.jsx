import React from 'react';
import './form.css';

let handleSubmit = function() {
    console.log('Submitting');
};

export default function Form() {
  return (
    <form onSubmit="handleSubmit" >
        Username: <input type="text" />
        Password: <input type="password" />
        <button type="submit">Submit</button>
    </form>
  )
}
