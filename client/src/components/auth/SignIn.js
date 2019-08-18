import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {signIn} from "../../actions";
import {compose} from "redux";

class SignIn extends React.Component {

    onSubmit = (formProps) => {
        this.props.signIn(formProps, () => {
            this.props.history.push('/feature');
        });
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
                <div>{this.props.errorMessage}</div>
                <button>Sign in!</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    connect(mapStateToProps, {signIn}),
    reduxForm({form: 'signIn'})
)(SignIn);
