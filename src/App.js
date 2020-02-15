import React from "react";

import Title from "./components/Title";
import "./App.css";

// Ways to style React with CSS
//
// Inline CSS
// App CSS
// CSS Variables
// File CSS

function App() {
  return (
    <div>
      <h1>Styled Components</h1>
      <h2 style={{ color: "red", textTransform: "uppercase" }}>
        inline styles
      </h2>
      <h2 className="global">Global CSS</h2>
      <h2 className="first">First</h2>
      <h2 className="second">Second</h2>
      <Title />
    </div>
  );
}

export default App;
