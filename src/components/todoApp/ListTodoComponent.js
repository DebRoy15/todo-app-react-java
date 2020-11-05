import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './Authentication/AuthenticationService'

export default class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    // { id: 1, description: 'learn React', done: false, targetDate: new Date() },
                    // { id: 2, description: 'learn dance', done: false, targetDate: new Date() },
                    // { id: 3, description: 'learn cooking', done: false, targetDate: new Date() }
                ]
        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({ todos: response.data })
                }
            )

    }
    render() {
        return (
            <>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </>
        )
    }


}
