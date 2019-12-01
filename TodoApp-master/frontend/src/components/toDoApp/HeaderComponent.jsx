import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
export class HeaderComponent extends Component {
    render() {
        const isLoggedin=AuthenticationService.isLoggedin();
        console.log(isLoggedin);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark ">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <a className="navbar-brand" href="#">TodoApp</a>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                               {isLoggedin &&  <NavLink className="nav-link" to="/" >Home</NavLink>}
                            </li>
                            <li className="nav-item">
                                {isLoggedin && <NavLink className="nav-link" to="/todos">Todos</NavLink>}
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        {/* <a className="navbar-brand mx-auto" href="#">Navbar 2</a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                {isLoggedin &&<NavLink onClick={AuthenticationService.logout} className="nav-link" to="/logout">LogOut</NavLink>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        );
    }
}

export default HeaderComponent