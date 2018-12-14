import React, { Component } from 'react'

import './NavBar.scss';
import isAuthenticated from "../../isAuthenticated";

class NavBar extends Component {


  render() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div><a href='#'><i className="fa fa-instagram"></i><span></span></a></div>
                {/* <div className='lil-bar'>
                    <div className='bar-cont'>
                        <a href='#' role="button"><i className="fa fa-user-plus"></i></a>
                        <a href='#' onclick='return false;' className='list-order' role="button"><i className="fa fa-ellipsis-h"></i></a>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="https://goo.gl/TChSJ4" target='_blank'><img src="https://goo.gl/aVijkX" className="avatar avatar-50"/>uncle_oreo</a></li>
                        <li><a href='#'>Log in</a></li>
                        <li><a href='#'>Sign up</a></li>
                        <li><a href='#'>Report this user</a></li>
                        <li className='collapse'><a href='#'>Collapse the bar</a></li>
                    </ul>
                </div> */}
            </nav>
        </React.Fragment>
    )
  }
}


export default NavBar;
