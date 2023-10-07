import Navbar from "./components/Navbar";
import "./assets/styles/navbar.css";
import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HelicopterList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
