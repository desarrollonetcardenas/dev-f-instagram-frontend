import React, { Component } from 'react'
import PostCard from './PostCard';

export default class Posts extends Component {
  render() {
    return (
      <div>
          <PostCard
            image="https://firebasestorage.googleapis.com/v0/b/dev-f-netflix.appspot.com/o/covers%2F3c86de2a-54da-45d7-8090-69cbfeee1461.jpg?alt=media&token=ab595217-bc45-4de4-9498-8e441eb1041f"
            liked={false}
            cardTitle="Star Trek 2019"
            cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
          >
          </PostCard>
      </div>
    )
  }
}
