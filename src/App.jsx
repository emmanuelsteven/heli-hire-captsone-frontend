import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Details from "./pages/Details";
import DeleteComponent from './components/Delete';
import AddItem from "./components/AddItem";
import Login from "./components/sessions/login";
import Register from "./components/sessions/signup";
import Reserve from "./components/reserve";
import Reservations from "./components/reservations";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-helicopter" element={<AddItem />} />
            <Route path="/helicopters" element={<HelicopterList />} />
            <Route path="/helicopters/:id" element={<Details />} />
            <Route path="/reservations" element={<HelicopterList />} />
            <Route path="/new-reservation" element={<Reserve />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/delete" element={<DeleteComponent />} />
        </Routes>
    );
}

export default App;
