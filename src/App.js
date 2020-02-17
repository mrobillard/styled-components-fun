import React from 'react';
import { createGlobalStyle } from 'styled-components';

import './App.css';
import StyledHeader from './components/StyledHeader';
import PropsButton from './components/PropsButton';

const GlobalStlye = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStlye />
      <StyledHeader title="hello" />
      <PropsButton color="blue">Button #1</PropsButton>
      <PropsButton color="red">Button #2</PropsButton>
      <PropsButton>Button #3</PropsButton>
    </div>
  );
}

export default App;
