import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';

export default class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.state = {
            welcomeMessage: ""
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized Welcome Message.
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}

                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessfulResponse(response))
        // // .catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({ welcomeMessage: response.data.hello })
        console.log(response.data)
    }

    handleError(error) {
        // console.log(error.response.data.message)
        this.setState({ welcomeMessage: error.response.data.message })
    }
}
