import React, { Component } from 'react';
import * as moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
export class ToDoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format("YYYY-MM-DD")
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    onSubmit(values) {
        console.log("on submit values", values);
        let todoId = this.props.match.params.id;
        let loggedinUserName = AuthenticationService.getLoggedinUser();

        if (todoId === -1) {

            TodoDataService.createTodo(loggedinUserName, { id: this.state.id, description: values.description, targetDate: values.targetDate }).then
                (
                    () => {
                        console.log("create to do:");
                        this.props.history.push("/todos");
                    }
                );

        } else {
            TodoDataService.updateTodo(loggedinUserName, todoId, { id: this.state.id, description: values.description, targetDate: values.targetDate }).then
                (
                    () => {
                        console.log("updated to do:");
                        this.props.history.push("/todos");
                    }
                );

        }



    }
    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Please enter a desription'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Please enter a valid date";
        }
        return errors;
    }
    componentDidMount() {
        let todoId = this.props.match.params.id;

        if (todoId === -1) {
            return
        }
        let loggedinUserName = AuthenticationService.getLoggedinUser();
        TodoDataService.todoByUsernameAndId(loggedinUserName, todoId).then(
            (response) => {
                console.log("response:", response)
                this.setState({ description: response.data.description, targetDate: moment(response.data.targetDate).format("YYYY-MM-DD") })
            }
        )
    }
    render() {
        let description = this.state.description;
        let targetDate = this.state.targetDate;
        return (
            <div>
                <h1>To do</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-grooup">
                                        <label>Description</label>
                                        <Field type="text" name="description" className="form-control"></Field>
                                    </fieldset>

                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-grooup">
                                        <label>Target Date</label>
                                        <Field type="date" name="targetDate" className="form-control"></Field>
                                    </fieldset>
                                    <button className="btn btn-success">Save</button>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>

        );
    }
}
export default ToDoComponent;