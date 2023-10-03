import Navbar from "./components/Navbar";
import "./assets/styles/navbar.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home />} />
      </Routes>
    </>
  );
}

export default App;
