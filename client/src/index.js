import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import SingUp from './components/auth/SignUp';
import reducers from './reducers';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" exact component={SingUp}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));