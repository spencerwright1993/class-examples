import React from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return (
            <div className="login-page-container">
                <h1>Welcome! Please Login to Continue.</h1>
                <LoginForm></LoginForm>

            </div>
        );
    };
}

export default LoginPage;