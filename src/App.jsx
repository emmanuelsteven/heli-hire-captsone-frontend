import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import AddItem from "./components/AddItem";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/" element={<HelicopterList />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
