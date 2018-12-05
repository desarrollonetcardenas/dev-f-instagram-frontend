import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Home } from "./components/Home";
import { SignUp } from './components/SingUp';

const Logout = () => {
    localStorage.removeItem("instragramToken")
    return <Redirect to="/login" />
}

export default [
    <Route exact path="/" component={Home} />,
    <Route exact path="/signup" component={SignUp} key={1} />,
    <Route exact path="/logout" component={Logout} key={2} />,
]
