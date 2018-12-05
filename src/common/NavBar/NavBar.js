import React, { Component } from 'react'
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper bg-main">
                <a href="/">
                    <img className="brand-logo" src={process.env.PUBLIC_URL + '/instagram-vector.png'} alt="" />
                </a>
                <ul className="right hide-on-med-and-down">
                    <a href="/signup" className="btn-btn-primary">Sing Up</a>
                </ul>
            </div>
        </nav>
    )
  }
}


export default NavBar;
