import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Signup from "./components/registration/Signup";
import Login from "./components/registration/Login";


function App() {
  return (
    <Routes> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HelicopterList />} />
    </Routes>
  );
}

export default App;
