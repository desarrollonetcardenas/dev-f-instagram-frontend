import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import  gql  from 'graphql-tag';


import { Input } from "../../common/Input";
import './Signup.scss';
import { Preloader } from "../../common/Preloader";

const REGISTER = gql`
  mutation Register($first_name:String!,$last_name:String!,$email:String!,$password:String!){
        signup(data:{ first_name:$first_name,
                        last_name:$last_name,
                        email:$email,
                        password:$password,
                        birth_date: "2018/01/01",
                        gender: "Male",
                        nationality: "Mexicano"
                    }){
                        token
                    }
          }`;
export default class  SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleInput = (e) => {
    const { id, value} = e.target;
    this.setState({
      [id]:value
    });
  }

  handleSubmit = (e, singup) => {
    e.preventDefault();
    if(this.state.password === this.state.confirmPassword) {
      singup({ variables:{ ...this.state } });
    } else {
      //Some toast message alerting password are not equal.
    }
  }

  catchError = (error) => {
    console.log(error);
  }

  renderForm = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-s12">

              <div className="row">
                <div className="col-s6 input-field">
                  <Input
                    id="first_name"
                    type="text"
                    name="First Name"
                    value={this.state.first_name}
                    setInput={this.handleInput}
                    required
                    ></Input>
                </div>
              </div>

              <div className="row">
                <div className="col-s6 input-field">
                  <Input
                    id="last_name"
                    type="text"
                    name="Last Name"
                    value={this.state.last_name}
                    setInput={this.handleInput}
                    required
                    ></Input>
                </div>
              </div>

              <div className="row">
                <div className="col-s6 input-field">
                  <Input
                    id="email"
                    type="email"
                    name="Email"
                    value={this.state.email}
                    setInput={this.handleInput}
                    required
                    ></Input>
                </div>
              </div>

            <div className="row">
              <div className="col-s6 input-field">
                <Input
                  id="password"
                  type="password"
                  name="Password"
                  value={this.state.password}
                  setInput={this.handleInput}
                  required
                  ></Input>
              </div>
            </div>

            <div className="row">
              <div className="col-s6 input-field">
                <Input
                  id="confirmPassword"
                  type="password"
                  name="Confirm Password"
                  value={this.state.confirmPassword}
                  setInput={this.handleInput}
                  required
                  ></Input>
              </div>
            </div>

          </div>
        </div>

        <button type="submit" className="waves-effect waves-light btn btn-primary">Submit</button>

      </div>
      )
  }


  catchData = (data) => {
    const { token } = data.signup;
    localStorage.setItem("instagramToken", token);
    this.props.history.push('/');
  }

  render() {
    return (
      <Mutation mutation={REGISTER}>
          {
            (signup, { data, error, loading }) => {
              if(data) this.catchData(data);
              if(error) this.catchError(error);
              if(loading) return <Preloader/>;

            return(
              <form onSubmit={ e => this.handleSubmit(e, signup) }>
                { this.renderForm() }
              </form>
              )
            }
          }
        </Mutation>
    )
  }
}
