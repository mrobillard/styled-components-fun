import styled from 'styled-components';

export const BasicInput = styled.input.attrs(props => ({
  type: 'text',
  placehold: 'Enter Value'
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

export const AwesomeInput = styled.input.attrs(props => ({
  type: props.type || 'number',
  placehold: props.placeholder || 'Enter Value'
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
