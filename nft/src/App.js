import "./index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Marketplace } from "./Pages/Marketplace";
import { Home } from "./Pages/Home";
import { Rankings } from "./Pages/Rankings";
import { Wallet } from "./Pages/Wallet";
import { Signup } from './Pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<Home />}>
            <Route index element={<Home />} />
            <Route path="/marketPlace" element={<Marketplace />} />
            <Route path="/Rankings" element={<Rankings />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
