import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { configStore } from './app/store';

ReactDOM.render(
    <Provider store={configStore()}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
