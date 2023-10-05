import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Signup from "./components/loginpage/Signup";


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HelicopterList />} />
    </Routes>
  );
}

export default App;
