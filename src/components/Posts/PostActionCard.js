import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

import  "./PostCard.scss";
import payload from "../../payload";
import { Preloader } from '../../common/Preloader';


const REGISTER_LIKE = gql`
    mutation registerLike($postID:ID!,$user_id:ID!){
        saveLikedActionPost(postID:$postID,user_id:$user_id)
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
        console.log("PROPS: ", this.props);
    }

    handleSubmit = (e, registerLike) => {
      e.preventDefault();

      registerLike({variables: {postID:this.props.id, user_id:this.state.user_id}});
    }


  render() {
    return (
        <Mutation mutation={REGISTER_LIKE}>
        {
            (registerLike,{data,error,loading}) => {
                if(loading) return <Preloader/>
                return (
                    <form onSubmit={e => this.handleSubmit(e, registerLike)}>
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
