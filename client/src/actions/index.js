import {AUTH_ERR, AUTH_USER} from "./types";
import axios from 'axios';

export const signUp = (formProps, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3090/signup', formProps);
            dispatch({
                type: AUTH_USER,
                payload: response.data.token
            });
            localStorage.setItem('token', response.data.token);
            callback();
        } catch (e) {
            dispatch({
                type: AUTH_ERR,
                payload: 'Email in use'
            });

        }
    }
};
export const signIn = (formProps, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3090/signin', formProps);
            dispatch({
                type: AUTH_USER,
                payload: response.data.token
            });
            localStorage.setItem('token', response.data.token);
            callback();
        } catch (e) {
            dispatch({
                type: AUTH_ERR,
                payload: 'Invalid credentials'
            });

        }
    }
};

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};