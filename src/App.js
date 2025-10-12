import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import Context from './Context';

function App() {
  const therme = {maincolor:"red",secondarycolor:"blue"};

  return (
    <>
      <Context.Provider value={therme}>
        <Navbar />
        <Container>
          <Home />
        </Container>
      </Context.Provider>
    </>
  );
}

export default App;
