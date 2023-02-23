import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopBar from "./componenets/TopBar";
import Home from "./componenets/Home";
import Saved from "./componenets/Saved";

const App = () => {

  const [saved, setSaved] = useState([]);
  const addQuote = (quote) => {
    for (let i = 0; i < saved.length; i++) {
      if (saved[i]._id === quote._id) {
        return;
      }
    }
    setSaved(saved.concat(quote));
  }
  const removeQuote = (quote) => {
    setSaved(saved.filter(save => save._id !== quote._id));
  }

  return(
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home addQuote={addQuote} />} />
        <Route path="/saved" element={<Saved saved={saved} removeQuote={removeQuote} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
