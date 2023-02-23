import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopBar from "./componenets/TopBar";

const App = () => {
  return(
    <BrowserRouter>
      <TopBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/saved" element={<Saved />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
