import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import FileUploader from "react-firebase-file-uploader";

import { Input } from "../../common/Input";
import  firebaseConfig from "../../firebaseConfig";


const CREATE_POST = gql`
    mutation newPost($data:PostInput!){
        createInstagramPost(data:$data)
    }
`

export default class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            user_id: "1",
            title: '',
            photo: '',
            likes: [{user_id: "1", user_name:"jose"}],
            comments: []
        }
    }

    handleData = (data) => {
        this.props.history.push('/posts');
    }

    handleSubmit = (e, createInstagramPost) => {
        e.preventDefault();
        let data = {...this.state};

        data.comments = [{
            user_id: this.state.user_id,
            user_comment: this.state.comments
        }];

        delete data.progress;

        console.log(data);
        createInstagramPost({ variables:{data} });
    }

    handleInput = (e) => {
        const{id, value} = e.target;
        this.setState({
            [id]:value
        })
    }

    handleUploadError = (error) => {
        console.log(error);
    }

    progressFile = (progress) => {
        this.setState({progress});
    }

    handleUploadSuccess = (filename) => {
        this.setState({progress: 100});

        firebaseConfig.storage()
          .ref("instaphotos")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({photo:url}))
          .catch(err => console.log(err))
    }


  render() {
    return (
      <div className="container">
        <Mutation mutation={CREATE_POST}>
        {
            (createInstagramPost,{data,err,loading}) => {
                if(err) console.error("ERROR OCURRED: ", err);
                if(data) this.handleData(data)

                return (
                    <form onSubmit={e => this.handleSubmit(e, createInstagramPost)}>
                        <div className="row">
                            <div className="col s5 input-field">
                                <Input
                                    type="text"
                                    id="title"
                                    name="Title"
                                    value={this.state.title}
                                    setInput={this.handleInput}
                                    required
                                ></Input>
                            </div>

                            <div className="col s5 input-field">
                                <textarea name="comments" id="comments" className="materialize-textarea" cols="10" rows="5" value={this.state.comments}
                                    onChange={this.handleInput}
                                ></textarea>
                                <label htmlFor="comments">Comments</label>
                            </div>

                            <div className="col s10">

                                <label className="btn btn-primary">
                                    <FileUploader
                                        hidden
                                        accept="image/*"
                                        randomizeFilename
                                        storageRef = {
                                            firebaseConfig.storage().ref('instaphotos')
                                        }
                                        onUploadError={this.handleUploadError}
                                        onProgress={this.progressFile}
                                        onUploadSuccess={this.handleUploadSuccess}
                                    />
                                    Agregar Cover
                                </label>
                                <span>Progress: {this.state.progress}%</span>
                            </div>
                        </div>

                        <button type="submit" className="waves-effect waves-light btn btn-primary"
                            disabled={ this.state.progress === 100 ? false : true }>
                            Post
                        </button>

                    </form>
                )
            }
        }
        </Mutation>
      </div>
    )
  }
}
