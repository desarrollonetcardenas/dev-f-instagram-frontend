import React, { Component } from 'react'

import './NavBar.scss';
import isAuthenticated from "../../isAuthenticated";

class NavBar extends Component {


  render() {
    return (
        <React.Fragment>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Instagram Devf</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {
                        isAuthenticated() == true ? (
                            <React.Fragment>
                                <li><a href="/logout">Logout</a></li>
                                <li><a href="/uploadpost">Upload Post</a></li>
                                <li><a href="/posts">Posts</a></li>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                            </React.Fragment>
                        )
                    }
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
  }
}


export default NavBar;
