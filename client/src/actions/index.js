import {AUTH_USER} from "./types";
import axios from 'axios';

export const signUp = (formProps) => {
    return (dispatch) => {
        axios.post('http://localhost:3090/signup', formProps);
        // return {
        //     type: AUTH_USER,
        //     payload:
        //         ''
        // }
    }
};