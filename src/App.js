import React from 'react';
import './App.css';

import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Submit</Button>
      </header>
    </div>
  );
}

const Button = styled.button`
  background: blue;
  color: white;
  height: 50px;
  border: 0px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px;
`

export default App;
