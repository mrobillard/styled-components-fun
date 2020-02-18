import React from 'react';
import { createGlobalStyle } from 'styled-components';

import './App.css';
import AlternativeHeader from './components/AlternativeHeader';
import {
  PropsButton,
  BigButton,
  SuccessButton,
  DangerButton
} from './components/PropsButton';

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
      <AlternativeHeader title="hello" />
      <PropsButton color="blue">Button #1</PropsButton>
      <PropsButton color="red">Button #2</PropsButton>
      <PropsButton>Button #3</PropsButton>
      <BigButton>Button #3</BigButton>
      <SuccessButton>Success</SuccessButton>
      <DangerButton big>Danger Button</DangerButton>
    </div>
  );
}

export default App;
