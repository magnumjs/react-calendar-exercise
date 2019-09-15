import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  expect(div.querySelector('.calendar')).toBeDefined();
  ReactDOM.unmountComponentAtNode(div);
});

it('current day is selected', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  expect(div.querySelector('.calendar .col .selected')).toBeDefined();
  ReactDOM.unmountComponentAtNode(div);
});

it('events are displayed', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  expect(div.querySelector('.calendar .col .event')).toBeDefined();
  ReactDOM.unmountComponentAtNode(div);
});
