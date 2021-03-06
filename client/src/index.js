import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import SingUp from './components/auth/SignUp';
import SingOut from './components/auth/SignOut';
import SingIn from './components/auth/SignIn';
import reducers from './reducers';
import Feature from './components/Feature';

const store = createStore(
    reducers,
    {
        auth: {
            authenticated: localStorage.getItem('token')
        }
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" exact component={SingUp}/>
                <Route path="/signout" exact component={SingOut}/>
                <Route path="/signin" exact component={SingIn}/>
                <Route path="/feature" exact component={Feature}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));