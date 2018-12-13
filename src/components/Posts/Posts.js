import React, { Component } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

import payload from "../../payload";


import PostCard from './PostCard';
import { Preloader } from "../../common/Preloader";

const GET_POSTS_BY_USER = gql`
  query GetAllPosts{
    getAllPosts{
      _id,
      user_id,
      title,
      photo,
      message,
      likes{
        user_id
      }
      comments {
        user_id, user_comment
      },
      is_active
    }
  }
`

export default class Posts extends Component {

  constructor(){
    super();

    const {id} =  payload();

    this.state = {
      user_id: id
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <Query query={GET_POSTS_BY_USER}>
            {
              ({data,error,loading}) => {
                if(error) return <h4>{"Hubo un Error !! :("}</h4>
                if(loading) return  <Preloader/>;

                console.log("DATA RESULT: ", data);

                const posts = data.getAllPosts.map((itempost,index) => (
                  <div className="col s12" key={index}>
                    <PostCard
                      id={itempost._id}
                      photo={itempost.photo}
                      liked={false}
                      cardTitle={itempost.title}
                      cardMessage={itempost.message}
                      likes={itempost.likes}
                      comments={itempost.comments}
                      >
                    </PostCard>
                  </div>
                ))
                return (
                  <React.Fragment>
                    {posts}
                  </React.Fragment>
                )
              }
            }
            </Query>
          </div>
      </div>
    )
  }
}
