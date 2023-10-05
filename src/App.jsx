import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import AddItem from "./components/AddItem";


function App() {
  return (
    <Routes>
      <Route path="/addItm" element={<AddItem />} />
      <Route path="/" element={<HelicopterList />} />
    </Routes>
  );
}

export default App;
