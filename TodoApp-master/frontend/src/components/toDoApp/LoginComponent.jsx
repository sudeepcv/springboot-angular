import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {

    constructor() {
        super()
        this.state = { username: "", password: "", hasLoginFailed: false, showSuccessMessage: false }
        this.login = this.login.bind(this);
    }

    inputOnchange = (event) => {
        console.log(`target name: ${event.target.name} and value: ${event.target.value}`)
        this.setState({ [event.target.name]: event.target.value })
    }
    login() {
        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password).then(
            response => {
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
            // AuthenticationService.setupAxiosInterceptors(response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
            }
        ).catch(
            () => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
            }
        );


    }

    render() {
        return (
            <div className="loginComponent">
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {this.state.showSuccessMessage && <div>Login success</div>}
                    UserName: <input type="text" onChange={(event) => this.inputOnchange(event)} name="username" />
                    Password: <input type="password" onChange={(event) => this.inputOnchange(event)} name="password" />
                    <button className="btn btn-success" onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;