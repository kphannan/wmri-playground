import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';

import 'ux-styleguide/dist/ux-styleguide.css';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
  document.getElementById('root'));
