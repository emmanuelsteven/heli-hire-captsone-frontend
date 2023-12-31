import { Route, Routes } from "react-router-dom";
import HelicopterList from "./pages/Helicopter";
import Details from "./pages/Details";
import AddItem from "./pages/AddItem";
import Login from "./components/sessions/login";
import Register from "./components/sessions/signup";
import Reserve from "./pages/reserve";
import Reservations from "./pages/reservations";
import DeleteReservationComponent from "./pages/DeleteReservation";
import DeleteHelicopterComponent from "./pages/DeleteHelicopter";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-helicopter" element={<AddItem />} />
            <Route path="/helicopters" element={<HelicopterList />} />
            <Route path="/helicopters/:id" element={<Details />} />
            <Route path="/delete-helicopter" element={<DeleteHelicopterComponent />} />
            <Route path="/delete-reservation" element={<DeleteReservationComponent />} />
            <Route path="/new-reservation" element={<Reserve />} />
            <Route path="/reservations" element={<Reservations />} />
        </Routes>
    );
}

export default App;
