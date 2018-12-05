import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';

import routes from './Routes'
import { NavBar } from './common/NavBar';
import './App.scss';
import client from './Graphql';


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <React.Fragment>
              <NavBar/>
              {routes}
            </React.Fragment>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
