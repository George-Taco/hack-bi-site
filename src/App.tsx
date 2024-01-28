import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page_One from "./pages/page_one";
import Page_Two from "./pages/page_two";
import Minigame from "./pages/minigame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page_one" element={<Page_One />} />
          <Route path="/page_two" element={<Page_Two />} />
          <Route path="/minigame" element={<Minigame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
