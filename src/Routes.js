import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Home } from "./components/Home";
import { SignUp } from './components/SingUp';
import {Login} from './components/Login';
import Posts from './components/Posts/Posts';
import PostForm from './components/Posts/PostForm';

const Logout = () => {
    localStorage.removeItem("instagramToken")
    return <Redirect to="/login" />
}

export default [
    <Route exact path="/" component={Home} />,
    <Route exact path="/signup" component={SignUp} key={1} />,
    <Route exact path="/logout" component={Logout} key={2} />,
    <Route exact path="/login" component={Login} key={3} />,
    <Route exact path="/posts" component={Posts} key={4} />,
    <Route exact path="/uploadpost" component={PostForm} key={5} />

]
