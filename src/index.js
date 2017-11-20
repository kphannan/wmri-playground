import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';

// import 'ux-styleguide/dist/ux-styleguide.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import MotivePower from './Containers/motivePower'

const store = configureStore();
            // <Route path="/roster" component={ MotivePower }/>

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/roster" component={MotivePower} />
        </Router>
    </Provider>,
  document.getElementById('root'));

            // <Route path="/roster" render={() => <MotivePower {...this.props} />} />
