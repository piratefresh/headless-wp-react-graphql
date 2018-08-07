import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainGrid from "./MainGrid";

const Home = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

class HomePage extends Component {
  render() {
    return (
      <Home>
        <MainGrid />
      </Home>
    );
  }
}

/**
 * Export the HomePage to be used elsewhere as an import
 */
export default HomePage;
