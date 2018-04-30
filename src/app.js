import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import Blocks from './components/Blocks';
import AppRouter from './routers/routers';
import logger from 'redux-logger';

let store = createStore(reducers, applyMiddleware(logger,thunk));



ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
