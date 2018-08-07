import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background: #212121;
`;

const Layout = props => (
  <LayoutWrapper>
    <Header />
    {props.children}
    <Footer />
  </LayoutWrapper>
);

export default Layout;
