import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

import  "./PostCard.scss";
import payload from "../../payload";


const SAVE_LIKE_ACTTION = gql`
    mutation saveLikeAction($id: ID){
        saveLikedActionPost(id: $id)
    }
`

export default class PostActionCard extends Component {

    animateLikeIcon = "like-icon animated bounceIn";

    constructor(props){
        super(props);
        const {id} = payload();

        this.state = {
            user_id: id
        }
    }

    handleSubmit = (e) => {
      e.preventDefault();
    }


  render() {
    return (
        <Mutation mutation={SAVE_LIKE_ACTTION} variables={{id: this.state.user_id}}>
        {
            (saveLikeAction,{data,error,loading}) => {
                return (
                    <form onSubmit={this.handleSubmit}>
                        <span className="action-card-css">
                            <p><label htmlFor="">{this.props.likes.length} likes</label></p>
                            <button type="submit">
                                <a href="#"><img alt="" className={this.animateLikeIcon} src="https://img.icons8.com/material-outlined/48/000000/like.png"/></a>
                            </button>
                            <a href="#"><img alt="" src="https://img.icons8.com/material-rounded/24/000000/speech-bubble.png"/></a>
                        </span>
                    </form>
                )
            }
        }
        </Mutation>
    )
  }
}
