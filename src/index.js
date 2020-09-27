import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root')
const renderApp = Component => {
  ReactDOM.render(
    <Component />,
    root
  )
}

renderApp(App)