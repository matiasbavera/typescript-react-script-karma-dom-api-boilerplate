import React from 'react';
import App from '../src/App';
import ReactDOM from 'react-dom';

it('renders learn react link', () => {
  const element = document.createElement('div');
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    element
  );
  expect(element.getElementsByClassName('App-link')[0].innerHTML).toContain('Learn React');
});