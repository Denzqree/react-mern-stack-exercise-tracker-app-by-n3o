import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">

                <Link to="/" className="navbar-brand" >Exercise Tracker App</Link>

                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Exercises</Link>
                                <Link to="/create" className="nav-link" >Create Exercise Log</Link>
                                <Link to="/user" className="nav-link" >Create User</Link>
                            </li>

                        </ul>
                </div>
            </nav>
        )
    }
};