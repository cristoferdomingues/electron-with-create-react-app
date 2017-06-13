import React from 'react';
import ReactDom from 'react-dom';
import Home from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
