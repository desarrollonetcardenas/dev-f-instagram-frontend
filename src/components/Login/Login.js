import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import './Login.scss';
import { Input } from '../../common/Input';

const LOGIN = gql`
    mutation InicioSesion($email:String!,$password:String!){
        login(email:$email,password:$password){
            token
        }
    }
`

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
      e.eventPreventDefault();

    }

    handleInput = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]:value
        })
    }



  render() {
    return (
        <div className="container">
            <div id="wrapper">
                <div className="main-content">
                    <div className="header">
                        <img alt="" src="https://i.imgur.com/zqpwkLQ.png" />
                    </div>
                    <div className="l-part">
                    {/* <input type="text" placeholder="Username" className="input-1" /> */}
                        <div className="overlap-text">
                            <Input
                                type="email"
                                name="User Name"
                                value={this.state.email}
                                setInput={this.handleInput}
                                required
                            ></Input>
                            <input type="password" placeholder="Password" className="input-2" />
                            <a href="#">Forgot?</a>
                        </div>
                        <input type="button" value="Log in" className="btn" />
                    </div>
                </div>
                <div className="sub-content">
                    <div className="s-part">
                        Don't have an account?<a href="/signup" onClick={this.handleSubmit}>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
