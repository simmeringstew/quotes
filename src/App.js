import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "./componenets/TopBar";
import Home from "./componenets/Home";
import Saved from "./componenets/Saved";

const App = () => {

  const [saved, setSaved] = useState(
    JSON.parse(localStorage.getItem("saved")) ?? [],
  );

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

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  return(
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/quotes" element={<Home addQuote={addQuote} />} />
        <Route path="/quotes/saved" element={<Saved saved={saved} removeQuote={removeQuote} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
