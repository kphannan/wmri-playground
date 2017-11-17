// import allReducers from '../Reducers';

// let middleware = [
//     thunk,
//     logger
// ];

// const initialState = {
//     ldapId: '',
//     ldapName: ''
// };

// const rootReducer = combineReducers({
//     allReducers: allReducers,
//     ...createForms({
//         owner: initialState
//     })
// });

// export default function configureStore() {
//     return createStore(
//         rootReducer,
//         composeWithDevTools(applyMiddleware(...middleware))
//     );
// }

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tasks from '../Reducers/taskListReducer'
import application from '../Reducers/applicationReducer'
import owner from '../Reducers/reducers'

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createForms } from 'react-redux-form';

import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash/throttle';




const loadStateX = () => {
    const initialOwnerState = {
        ldapId: 'kxh818',
        ldapName: 'z'
    };


    const initialApplicationState = {
        // Name of the application
        name: 'defaultApp',
        ldap: ''
    };


    const initialTaskState = [
        // List of mandatory tasks for the target application
          { id: 1, name: 'Financial Controls',  isEnabled: false },
          { id: 2, name: 'Request for Change',  isEnabled: true },
          { id: 5, name: 'Testing',             isEnabled: true },
          { id: 3, name: 'task X',              isEnabled: false },
          { id: 4, name: 'task Y',              isEnabled: false },
        ];

    const persistedState = {
        tasks:       initialTaskState,
        owner:       initialOwnerState,
        application: initialApplicationState
    };

    return persistedState;
};




const configureStore = () => {

    const persistedState = loadState();

    const rootReducer = combineReducers({
        tasks,
        application,
        // owner,
        ...createForms({
                owner,
        })
    });

    let middleware = [
        thunk
    ];

    // Include logger only in dev/qa
    // if ( process.env.NODE_ENV !== 'production' ) {
    if ( process.env.NODE_ENV === 'development' ) {
        middleware.push( logger );
    }

    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    console.log( "Initial state of the store")
    console.log( store.getState() );

    // Save state on change only in development/qa
    if ( process.env.NODE_ENV === 'development' ) {
        store.subscribe( () => {
            saveState(store.getState())
        });
        // store.subscribe( throttle(() => { saveState(store.getState())}, 1000 ));
    }

    return store;
}



export default configureStore;