import React, { Component } from 'react'

import  "./PostCard.scss";
import PostActionCard from "./PostActionCard";

export default class PostCard extends Component {


    constructor(props) {
        super(props);
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
                                <PostActionCard id={this.props.id} likes={this.props.likes} comments={this.props.comments}></PostActionCard>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
