import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Global, css } from '@emotion/core';
import './style.css';
ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        /* Use better layout model (border-box) */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        body {
          margin: 0px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();