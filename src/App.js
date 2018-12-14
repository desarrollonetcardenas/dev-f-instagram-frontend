import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';

import routes from './Routes'
import { NavBar } from './common/NavBar';
import './App.scss';
import client from './Graphql';
import { Footer } from './common/Footer';


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Router>
                <React.Fragment>
                  <div className="row">
                    <div className="col s12">
                      <NavBar/>
                    </div>
                  </div>
                  <div className="row container-margin">
                    <div className="col s12">
                      {routes}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <Footer/>
                    </div>
                  </div>
                </React.Fragment>
              </Router>
              </div>
            </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
