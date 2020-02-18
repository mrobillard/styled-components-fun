import React from 'react';
import styled from 'styled-components';

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>Section Title</h3>
      <p>lorem ipsum, dolor sit amet</p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${props => `background:${props.theme.secondaryColor}`};
  ${props => `color:${props.theme.primaryColor}`};
`;
