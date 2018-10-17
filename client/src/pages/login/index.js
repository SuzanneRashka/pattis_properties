import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login page from pages</h1>
                <button><Link to='/dashboard'>Login</Link></button>
            </div>
        );
    }
}

export default Login;