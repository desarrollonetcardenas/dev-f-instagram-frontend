import React, { Component } from 'react'

import  "./PostCard.scss";
import gql from 'graphql-tag';

const LIKE_MUTATION = gql`
    mutation likeMutation($id: ID) {
        saveLikePost(id: $id)
    }
`

export default class PostCard extends Component {

    animateLikeIcon = "like-icon animated bounceIn";

    constructor(props) {
        super(props);
    }

    renderActionCard = () => {
        return (
            <React.Fragment>
                <span className="action-card-css">
                    <p><label htmlFor="">{this.props.likes.length} likes</label></p>
                    <a href="" onClick={this.saveLike}><img alt="" className={this.animateLikeIcon} src="https://img.icons8.com/material-outlined/48/000000/like.png"/></a>
                    <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
                </span>
            </React.Fragment>
            )
        // if(this.props.liked){
        //     return (
        //         <React.Fragment>
        //             <a href=""><img className="liked-icon" alt="" src="https://img.icons8.com/plasticine/48/000000/like.png"/></a>
        //             <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
        //         </React.Fragment>
        //     )
        // } else {
        //     return (
        //         <React.Fragment>
        //             <a href="#"><img alt="" className="like-icon" src="https://img.icons8.com/material-outlined/48/000000/like.png"/></a>
        //             <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
        //         </React.Fragment>
        //     )
        // }
    }

    saveLike = (e) => {
        e.preventDefault();
        this.animateLikeIcon = "like-icon jello animated";
    }



    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.photo} alt="" />
                            <span className="card-title">{this.props.cardTitle}</span>
                         </div>
                            <div className="card-content">
                                <p>{this.props.cardMessage}</p>
                            </div>
                            <div className="card-action">
                                {
                                    this.renderActionCard()
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
