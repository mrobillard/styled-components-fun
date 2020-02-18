import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { RedTheme, BlueTheme, GreenTheme } from './components/Themes';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState(RedTheme);

  const handleTheme = () => {
    if (theme.primaryColor === 'red') {
      setTheme(BlueTheme);
    } else if (theme.primaryColor === 'blue') {
      setTheme(GreenTheme);
    } else {
      setTheme(RedTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavBar>
          <Button onClick={handleTheme}>Toggle Theme</Button>
        </NavBar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
