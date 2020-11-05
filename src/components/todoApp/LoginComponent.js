import React, { Component } from 'react'
import AuthenticationService from './Authentication/AuthenticationService.js'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'debtor15',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        // console.log(this.state)
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        if (this.state.username === 'debtor15' && this.state.password === '12345') {
            AuthenticationService.registerSuccessfulLogin();
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ showSuccessMessage: true })
            // this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                User Name = <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password = <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </>
        )
    }
    // handleUsernameChange(event) {
    //     this.setState({ username: event.target.value })
    // }
    // handlePasswordChange(event) {
    //     this.setState({ password: event.target.value    })
    // }
}