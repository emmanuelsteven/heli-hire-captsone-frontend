import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Login from "./components/sessions/login";
import Register from "./components/sessions/signup";
import Reservations from "./components/reservations";
import Reserve from "./components/reserve";



function App() {
  return (
   
    <Routes>

    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
      <Route path="/helicopters" element={<HelicopterList />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
   
  );
}

export default App;
