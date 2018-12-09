import React, { Component } from 'react'

import './NavBar.scss';
import isAuthenticated from "../../isAuthenticated";

class NavBar extends Component {


  render() {
    return (
        <nav>
            <div className="nav-wrapper bg-main">
                <a href="/">
                    <img className="brand-logo" src={process.env.PUBLIC_URL + '/instagram-vector.png'} alt="" />
                </a>
                <ul className="right hide-on-med-and-down">
                    {
                        isAuthenticated() == true ? (
                            <li><a href="/logout" className="btn-btn-primary">Logout</a></li>
                            ) : (
                            <React.Fragment>
                                <li><a href="/posts" className="btn-btn-primary">Posts</a></li>
                                <li><a href="/signup" className="btn-btn-primary">Sing Up</a></li>
                                <li><a href="/login" className="btn-btn-primary">Login</a></li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
  }
}


export default NavBar;
