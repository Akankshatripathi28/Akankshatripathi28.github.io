import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.module.scss";
import LandingLayout from "./components/LandingLayout/LandingLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}></Route>
          <Route path="/home" element={<LandingLayout />}></Route>
          <Route path="/portfolio" element={<LandingLayout />}></Route>
          <Route path="/pages" element={<LandingLayout />}></Route>
          <Route path="/blog" element={<LandingLayout />}></Route>
          <Route path="/shop" element={<LandingLayout />}></Route>
          <Route path="/support" element={<LandingLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
