import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // const result = ReactDOM.render(<App />, div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(div.props.children).tobeTruthy()
});
