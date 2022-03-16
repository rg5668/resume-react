import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./css/App.css";
import "./css/Intro.css";

import Main from "./pages/Main";
import Aboutme from "./pages/Aboutme";
import Skills from "./pages/Skills";
import Archiving from "./pages/Archiving";
import Project from "./pages/Project";
import Career from "./pages/Career";
import Intro from "./pages/Intro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/archiving" element={<Archiving />} />
          <Route path="/project" element={<Project />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
