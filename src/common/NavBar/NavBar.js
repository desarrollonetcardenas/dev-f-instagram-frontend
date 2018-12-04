import React, { Component } from 'react'
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper bg-main">
            <img  className="brand-logo" src="https://www.biscuitsandbath.com/wp-content/uploads/2018/05/instagram-logo-2.png" alt="" />
                <ul className="right hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    )
  }
}


export default NavBar;
