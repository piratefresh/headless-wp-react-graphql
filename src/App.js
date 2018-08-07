import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client, store } from "../src/state/store";
import "./App.css";
import Layout from "./layouts/Layout";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Layout>
            <HomePage />
          </Layout>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
