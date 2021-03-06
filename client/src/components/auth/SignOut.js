import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions'

class SignOut extends React.Component {

    componentDidMount() {
        this.props.signOut();
    }

    render() {
        return (
            <div>Have a nice day!</div>
        )
    }
}

export default connect(null, {signOut})(SignOut);