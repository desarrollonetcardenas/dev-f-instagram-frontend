import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import './Login.scss';
import { Input } from '../../common/Input';
import { Preloader } from '../../common/Preloader';

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

    handleForm = (e, InicioSesion) => {
      e.preventDefault();
      InicioSesion({ variables: {...this.state} });
    }

    handleInput = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]:value
        })
    }

    catchData = (data) => {
        const {token} = data.login;
        localStorage.setItem("instagramToken", token);
        this.props.history.push('/');
    }

    handleError = (error) => {
      console.log('Error: ', error);
    }


  render() {
    return (
        <Mutation mutation={LOGIN}>
        {
            (InicioSesion,{data,error,loading}) => {
                if(data) this.catchData(data);
                if(error) this.handleError(error);
                if(loading) return <Preloader></Preloader>;

                return (
                    <form onSubmit={e => this.handleForm(e, InicioSesion)}>
                        <div className="container">
                            <div id="wrapper">
                                <div className="main-content">
                                    <div className="header">
                                        <img alt="" src="https://i.imgur.com/zqpwkLQ.png" />
                                    </div>
                                    <div className="l-part">
                                        <div className="overlap-text input-text">
                                            <Input
                                                type="email"
                                                id="email"
                                                name="User Name"
                                                value={this.state.email}
                                                setInput={this.handleInput}
                                                required
                                                ></Input>
                                        </div>
                                        <div className="overlap-text input-text">
                                            <Input
                                                type="password"
                                                id="password"
                                                name="Password"
                                                value={this.state.password}
                                                setInput={this.handleInput}
                                                required
                                                ></Input>
                                            <a href="/forgot">Forgot?</a>
                                        </div>

                                        <input type="submit" value="Log in" className="btn" />
                                    </div>
                                </div>
                                <div className="sub-content">
                                    <div className="s-part">
                                        Don't have an account?<a href="/signup">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            }
        }
        </Mutation>

    )
  }
}
