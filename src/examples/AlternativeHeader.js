import React from 'react';
import styled from 'styled-components';

const AlternativeHeader = ({ title, className }) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>Another Heading</h2>
    </section>
  );
};

export default styled(AlternativeHeader)`
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
