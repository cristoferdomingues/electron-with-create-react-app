import React from 'react';
import ReactDom from 'react-dom';
import Alerts from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alerts />, div);
});
