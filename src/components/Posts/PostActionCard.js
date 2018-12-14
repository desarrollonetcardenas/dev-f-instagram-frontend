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
            user_id: id,
            comments: ''
        }
    }

    handleSubmit = (e, registerLike) => {
      e.preventDefault();

      registerLike({variables: {postID:this.props.id, user_id:this.state.user_id}});
    }

    handleInput = (e) => {
        const{id, value} = e.target;
        this.setState({
            [id]:value
        })
    }

    handleClick = (e) => {
      e.preventDefault();
    }


  render() {
    return (
        <Mutation mutation={REGISTER_LIKE}>
        {
            (registerLike,{data,error,loading}) => {
                if(loading) return <Preloader/>
                return (
                    <form onSubmit={e => this.handleSubmit(e, registerLike)}>
                        <div className='react'>
                            <button type="submit" className="no-button"><span className='love'></span></button>
                            <a href='#' onClick={this.handleClick} role='button'><span className='comment'></span></a>
                            <a href='#' onClick={this.handleClick} role='button'><span className='save'></span></a>
                            <p>{this.props.likes.length} Likes</p>
                        </div>
                        <div className='caption'>
                            <span>{this.props.message}</span>
                        </div>
                        <div className='comment-section'>
                            <input type='text' id='cmnt' placeholder='Add a comment...'/>
                            <span className='dot02'></span>
                        </div>
                    </form>
                )
            }
        }
        </Mutation>
    )
  }
}
