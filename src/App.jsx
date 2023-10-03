import React from "react";
import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HelicopterList />} />
    </Routes>
  );
}

export default App;
