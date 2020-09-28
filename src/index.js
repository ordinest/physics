import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const root = document.getElementById('root')
const renderApp = Component => {
  ReactDOM.render(
    <Component />,
    root
  )
}

renderApp(App)