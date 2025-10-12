import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
// import Context from './Context';
import GlobalStyle from './features/GlobalStyle';


function App() {
  // const therme = {maincolor:"red",secondarycolor:"blue"};

  return (
    <>
      <GlobalStyle />
          <Navbar />
          <Container>
            <Home />
          </Container>
    </>
  );
}

export default App;
