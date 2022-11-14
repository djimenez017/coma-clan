import React from "react";
import styled from "styled-components";

const Container_Styles = styled.div`
  background-color: pink;
`;

const container = ({ children }) => {
  return <Container_Styles>{children}</Container_Styles>;
};

export default container;
