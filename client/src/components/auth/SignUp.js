import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {signUp} from "../../actions";
import {compose} from "redux";

class SignUp extends React.Component {

    onSubmit = (formProps) => {
        this.props.signUp(formProps);
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Sign up!</button>
            </form>
        )
    }
}

export default compose(
    connect(null, {signUp}),
    reduxForm({form: 'signUp'})
)(SignUp);
