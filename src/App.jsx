import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Login from "./components/sessions/login";
import Register from "./components/sessions/signup";


function App() {
  return (
    <Routes> 
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/helicopters" element={<HelicopterList />} />
    </Routes>
  );
}

export default App;
