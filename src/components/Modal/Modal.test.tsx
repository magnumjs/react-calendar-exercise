import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

it('renders without crashing', () => {
  const props = {
      handleClose: ()=>{}, show:false, children : <b>TEST</b>
  }
  const div = document.createElement('div');
  ReactDOM.render(<Modal{...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders modal as visible', () => {
  const props = {
      handleClose: ()=>{}, show:true, children : <b>TEST</b>
  }
  const div = document.createElement('div');
  ReactDOM.render(<Modal{...props} />, div);
    expect(div.querySelector('.modal.display-block')).toBeDefined();
    expect(div.querySelector('.modal')).toBeDefined();
    ReactDOM.unmountComponentAtNode(div);
});

it('renders modal as visible', () => {
  const props = {
      handleClose: ()=>{}, show:true, children : <b>TEST</b>
  }
  const div = document.createElement('div');
  ReactDOM.render(<Modal{...props} />, div);
    expect(div.querySelector('.modal.display-block')).toBeDefined();
    expect(div.querySelector('.modal .modal-main').innerHTML).toEqual('<b>TEST</b><button>Close</button>');
    ReactDOM.unmountComponentAtNode(div);
});

it('renders modal as NOT visible', () => {
  const props = {
      handleClose: ()=>{}, show:false, children : <b>TEST</b>
  }
  const div = document.createElement('div');
  ReactDOM.render(<Modal{...props} />, div);
    expect(div.querySelector('.modal.display-block')).toBeNull();
    ReactDOM.unmountComponentAtNode(div);
});

