import { HomePage, SlideShowPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { Wrapper } from "components"

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/art_name" element={<SlideShowPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
