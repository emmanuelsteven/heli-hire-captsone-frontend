import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Details from "./pages/Details";
import AddItem from "./components/AddItem";
import Login from "./components/sessions/login";
import Register from "./components/sessions/signup";
import DeleteReservationComponent from "./components/DeleteReservation";
import DeleteHelicopterComponent from "./components/DeleteHelicopter";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-helicopter" element={<AddItem />} />
            <Route path="/helicopters" element={<HelicopterList />} />
            <Route path="/helicopters/:id" element={<Details />} />
            <Route path="/reservations" element={<HelicopterList />} />
            <Route path="/new-reservation" element={<HelicopterList />} />
            <Route path="/delete-helicopter" element={<DeleteHelicopterComponent />} />
            <Route path="/delete-reservation" element={<DeleteReservationComponent />} />
        </Routes>
    );
}

export default App;
