import React, { Component } from 'react'

import './Home.scss';
import isAuthenticated from "../../isAuthenticated";
import { Posts } from "../Posts/";



class Home extends Component {


    renderAuthenticated = () => {
        if(isAuthenticated()){
            return (
                <React.Fragment>
                    <Posts></Posts>
                </React.Fragment>
            )
        } else {

        }
    }

    render() {
        return (
            <div className="Home">
                <div className="row">
                    <div className="col s6 offset-s3 Home-title">
                    {
                        this.renderAuthenticated()
                    }
                    </div>
                </div>
            </div>
        )
  }
}

export default Home;
