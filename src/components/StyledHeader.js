import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  background: red;
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
    background: black;
  }
`;

const StyledHeader = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2>Another Heading</h2>
    </StyledWrapper>
  );
};

export default StyledHeader;
