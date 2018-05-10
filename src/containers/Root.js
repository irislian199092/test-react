import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import {configureStore} from '../configureStore';
import App from '../component/App.js';

import '../css/base.scss';

// const store = configureStore();
export  class Root extends Component {
  render() {
    return (
        <App />
    )
  }
}