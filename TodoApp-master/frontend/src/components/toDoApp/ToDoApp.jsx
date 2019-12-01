import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoutes from './AuthenticateRoutes.jsx';

import LoginComponent from './LoginComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ToDoComponent from './ToDoComponent.jsx';

class ToDoApp extends Component {

    render() {
        return (
            <div className="todoApp">
                <Router>
                    <>
                    
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoutes path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoutes path="/todos/:id" component={ToDoComponent} />
                            <AuthenticatedRoutes path="/todos" component={ListTodosComponent} />
                            <Route path="/logout" component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                        </>
                    
                </Router>
            </div>

        );
    }

}














function ErrorComponent() {
    return <div>Something went wrong </div>
}




export default ToDoApp;