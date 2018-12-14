import React, { Component } from 'react'

import  "./PostCard.scss";
import PostActionCard from "./PostActionCard";

export default class PostCard extends Component {


    constructor(props) {
        super(props);
        console.log("PROPS: ", props);
    }

    render() {
        return (
            <form name="formPostCard" id="formPostCard">
                <section>
                    <div className='insta fade-scroll'>
                        <div className='top-insta'>
                            <a href='#' target='_blank' className='user'>{this.props.cardTitle}</a>
                            <span className= 'dot'></span>
                        </div>
                        <div className='post'>
                            <div className="overlay">
                                <span></span>
                            </div>
                            <img alt={this.props.cardTitle} src={this.props.photo} />
                        </div>
                        <div className='footer'>
                            <PostActionCard
                                id={this.props.id}
                                comments={this.props.comments}
                                message={this.props.cardMessage}
                                likes={this.props.likes}
                            />
                        </div>
                    </div>
                    <div className="a1 fade-scroll"></div>
                    <div className="a1 fade-scroll"></div>
                    <div className="a1 fade-scroll"></div>
                    <div className="a1 fade-scroll"></div>
                    <div className="a1 fade-scroll"></div>
                </section>
            </form>
        )
    }
}
