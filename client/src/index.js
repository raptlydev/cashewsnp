import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import store from "./utils/store";
import { Switch, Router } from 'react-router-dom';
import history from "./utils/history";
import { Provider } from "react-redux";

if (module.hot) {
    module.hot.accept();
}

const render = () => {
    ReactDOM.render(
        // Wrap Provider inside AppContainer
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <App />
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
};

axios.interceptors.request.use(config => {
    config.headers = Object.assign({}, config.headers, {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer '
    });
    return config;
});

render();