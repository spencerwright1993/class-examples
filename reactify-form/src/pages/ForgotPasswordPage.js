import React from 'react';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return (
            <div className="forgot-password-page-container">
                <h1>Oops! 
                    It seems you've forgotten your password. 
                    Let us help you out!
                </h1>

            </div>
        );
    };
}

export default ForgotPasswordPage;