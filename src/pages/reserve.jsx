import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postReservation, createMsgAction } from "../features/reservations/reservationSlice"
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import "../stylesheets/reserve.css";
import LayoutComponent from "../components/Layout";
import cities from "../assets/data/cities";

const Reserve = () => {
  const helicopters = useSelector((state) => state.helicopter.helicopter);
  const createmsg = useSelector ((state) => state.sessions);
  // const reservationData = useSelector ((state) => state.reservations);
  const user = JSON.parse(window.localStorage.getItem('userId'));
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
   

    const { chosenHelicopterId = -1} = location.state || {};
    
    const [helicopterIdState, setHelicopterIdState] = useState(chosenHelicopterId);
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [created, setCreated] = useState(false);
  
    useEffect(() => {
      if (!isLoggedIn) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
  
      if (helicopters.length === 0) {
        dispatch(fetchHelicopters());
      }
  
      if (createmsg === 'success') {
        setCreated(true);
        setErrorMessage('');
        setErrorMessage('');
        dispatch(createMsgAction());
        setTimeout(() => {
          navigate('/reservations');
        }, 2500);
      }
      if (createmsg === '') {
        setErrorMessage(
          "Oops! Reservation couldn't be created. Can't reserve the same helicopter on the same day.",
        );
        dispatch(createMsgAction());
      }
    }, [createmsg, created, dispatch, isLoggedIn, navigate, helicopters]);
  
    if (!isLoggedIn) {
      return (
        <div className="popup-message">
          <p>Please log in to access this page</p>
        </div>
      );
    }
          const statusOption = ['Confirmed', 'Not confirmed'];
          const handleSubmit = (e) => {
            e.preventDefault();
            if (
              helicopterIdState === -1
              || date === ''
              || city === ''
              || status === ''
            ) {
              setErrorMessage('Please fill all fields');
            }
            const reservation = {
              helicopter_id: helicopterIdState,
              user_id: user,
              date,
              city,
              status,
            };
            dispatch(postReservation(reservation));
            navigate('/reservations');
          };

          const getCurrentDate = () => new Date().toJSON().slice(0, 10);

          return ( 
            <LayoutComponent>
            <section className="reserve-helicopter-page">
               <section className="reserve-nav-container">
      </section>
              <div className="reserve-main-container">
                
                <h1>Charter a Helicopter</h1>
                <div className="reserve-page-divider" />
                <p>
                Build a trip in minutes
Get a personalized itinerary just for you, guided by heli traveler tips and reviews.
                </p>
               <form onSubmit={handleSubmit} className="reserve-form">
          <select
            defaultValue={chosenHelicopterId || ''}
            name="helicopter_id"
            id="helicopter-drop-down"
            onChange={(e) => setHelicopterIdState(e.target.value)}
          >
            <option value="">Select a helicopter</option>
            {helicopters.map((helicopter) => (
              <option
                key={helicopter.id + helicopter.name}
                value={helicopter.id}
              >
                {helicopter.name}
              </option>
            ))}
          </select>

          <select
            name="city"
            id="city-dropdown"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <input
            type="date"
            id="date-picker"
            name="date"
            min={getCurrentDate()}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            name="status"
            id="status-dropdown"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select a status</option>
            {statusOption.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <p className="error-messages">{errorMessage}</p>
          <input type="submit" value="Book Now" />
        </form>

        <div className={`popup-message ${created ? '' : 'hidden'}`}>
          <p>Reservation has been created successfully!</p>
        </div>
      </div>
    </section>
    </LayoutComponent>    
  );
};

export default Reserve;