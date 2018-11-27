import React, { Component } from 'react'

import './login.style.css';

export default class Login extends Component {

    login = () => {

    }

  render() {
    return (
        <div>
            <div id="wrapper">
            <div className="main-content">
                <div className="header">
                <img alt="" src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className="l-part">
                <input type="text" placeholder="Username" className="input-1" />
                <div className="overlap-text">
                    <input type="password" placeholder="Password" className="input-2" />
                    <a href="#">Forgot?</a>
                </div>
                <input type="button" value="Log in" className="btn" />
                </div>
            </div>
            <div className="sub-content">
                <div className="s-part">
                Don't have an account?<a href="#">Sign up</a>
                </div>
            </div>
            </div>
        </div>
    )
  }
}
