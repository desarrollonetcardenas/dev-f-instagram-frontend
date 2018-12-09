import React, { Component } from 'react'

import './Home.scss';



class Home extends Component {

    isAuthenticated = () => {
        if(localStorage.getItem("instagramToken"))
            return true;
        else
            return false;
    }

    render() {
        return (
            <div className="Home">
                <div className="row">
                    <div className="col s6 offset-s3 Home-title">
                    </div>
                </div>
            </div>
        )
  }
}

export default Home;
