import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import history from './components/history';

import templateSaga from './services/template-saga';
import authSaga from './services/auth-saga'
import documentSaga from './services/document-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, {}, middleware);

sagaMiddleware.run(templateSaga);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(documentSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
