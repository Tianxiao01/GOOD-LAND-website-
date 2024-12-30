import { useState } from "react";
//importing subpages
import Home from "./pages/Home/Home";
import LongTerm from "./pages/LongTerm/LongTerm";
import Future from "./pages/Future/Future";
import ShortTerm from "./pages/ShortTerm/ShortTerm";
//css
import "./App.css";
//React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LongTerm" element={<LongTerm />} />
          <Route path="/Future" element={<Future />} />
          <Route path="/ShortTerm" element={<ShortTerm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
