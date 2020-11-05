import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListTodoComponent from './ListTodoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from './Authentication/AuthenticatedRoute'



export default class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodoComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-1234</div>
}