import React from 'react';
import ReactDom from 'react-dom';
import Header from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
