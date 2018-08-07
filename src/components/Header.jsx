import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import styled from "styled-components";

const HeaderContainer = styled.div``;
const NavWrapper = styled.div`
  background: #663399;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  @media (max-width: 950px) {
    padding: 5px;
    width: 100%;
  }
`;
const NavUl = styled.ul`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
  }
  h2 {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <MediaQuery query="(max-width: 950px)" />

    <NavWrapper>
      <MediaQuery query="(min-width: 950px)">
        <NavUl>
          <Link to="/">Brewery</Link>
          <Link to="/">Beers</Link>
          <Link to="/">Visit</Link>
          <Link to="/">
            <h2>Brewery</h2>
          </Link>
          <Link to="/">Events</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Store</Link>
        </NavUl>
      </MediaQuery>
      <MediaQuery query="(max-width: 950px)">
        <NavUl>
          <Link to="/">
            <h2>Brewery</h2>
          </Link>
        </NavUl>
      </MediaQuery>
    </NavWrapper>
  </HeaderContainer>
);

export default Header;
