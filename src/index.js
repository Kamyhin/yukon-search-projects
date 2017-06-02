/**
 * Entry point
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store'


const store = configureStore();

ReactDom.render(
    <Provider store = { store }>
        <h2>Yukon search projects</h2>
    </Provider>,
    document.getElementById('root')
);
