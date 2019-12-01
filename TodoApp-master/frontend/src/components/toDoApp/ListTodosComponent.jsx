import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import * as moment from 'moment';
class ListTodosComponent extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.getAllTodos = this.getAllTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.addTodoButtonClick = this.addTodoButtonClick.bind(this);
    }
    componentDidMount() {
        this.getAllTodos();
    }
    addTodoButtonClick() {
        this.props.history.push(`/todos/-1`)
    }
    getAllTodos() {
        let loggedinUser = AuthenticationService.getLoggedinUser();
        TodoDataService.todos(loggedinUser).then(response => {
            this.setState({ todos: response.data })
        })
    }
    updateTodo(id) {
        console.log("updat to do :" + id)
        this.props.history.push(`/todos/${id}`)
    }
    deleteTodo(id) {
        let loggedinUser = AuthenticationService.getLoggedinUser();
        TodoDataService.deleteTodo(loggedinUser, id).then(response => {
            this.setState({ message: "To do deleted!" })
            this.getAllTodos()
        })
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>TargetDate</th>
                                <th>Is Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoButtonClick}>Add</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;