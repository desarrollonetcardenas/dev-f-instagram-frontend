import React, { Component } from 'react'

import  "./PostCard.scss";

export default class PostCard extends Component {

    constructor(props) {
        super(props);
    }

    renderCardAction = () => {
        if(this.props.liked){
            return (
                <React.Fragment>
                    <a href=""><img className="liked-icon" alt="" src="https://img.icons8.com/plasticine/48/000000/like.png"/></a>
                    <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <a href="#"><img alt="" className="like-icon" src="https://img.icons8.com/material-outlined/48/000000/like.png"/></a>
                    <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
                </React.Fragment>
            )
        }
    }


    render() {
        return (

            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.image} alt="" />
                            <span className="card-title">{this.props.cardTitle}</span>
                         </div>
                            <div className="card-content">
                                <p>{this.props.cardContent}</p>
                            </div>
                            <div className="card-action">
                                {
                                    this.renderCardAction()
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
