import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postReservations, getReservations } from "../features/reservations/reservationSlice"

const Reservation = () => {
    const { reservations} = useSelector((state) => state.reservation);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
     useEffect(() => {
        dispatch(getReservations() ) 
     }, [dispatch])
     console.log(reservations)

    const { chosenHelicopterId = -1} = location.state || {};
    
    const [formData, setFormData] = useState({
        helicopterId: chosenHelicopterId,
        date: '',
        city: '',
        status: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
      const [created, setCreated] = useState(false);

    const [helicopterIdState, setHelicopterIdState] = useState(chosenHelicopterId);

      const cities = [
        // Cities from Nigeria
    'Lagos',
    'Abuja',
    'Kano',
    'Ibadan',
    'Port Harcourt',
    'Benin City',
   //cities in ghana
        'Accra',
        'Tamale',
        'Cape Cost',
        'Obuasi',
        'Tema',
        'Madina',
        //cities in urganda
        'Kampala',
        'Kira',
        'Njeru',
        'Gulu',
        'Masaka',
        'Lira',
        //cities in  pakistan
        'Karachi',
        'lahore',
        'Multan',
        'Quetta',
        'Sukkur',
        'Larkana',
          ];
          const statusOption = ['Confirmed', 'Not confirmed'];
          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
          };
          const handleSubmit = (e) => {
            e.preventDefault();
            const { helicopterId, date, city, status } = formData;
        
            if (!helicopterId || !date || !city || !status) {
              setErrorMessage('Please fill all fields');
            } else {
              dispatch(postReservation(formData));
              navigate('/reservations');
            }
          };
          const getCurrentDate = () => new Date().toJSON().slice(0, 10);

          return (
            <section className="reserve-helicopter-page">
              <section className="reserve-nav-container">
                <Navbar />
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
                    name="helicopterId"
                    value={formData.helicopterId}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Helicopter</option>
                    {helicopters.map((helicopter) => (
                      <option key={helicopter.id +  helicopter.name} 
                      value={helicopter.id}>
                        {helicopter.name}
                      </option>
                    ))}
                  </select>
                  <select name="city" value={formData.city} onChange={handleInputChange}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    min={getCurrentDate()}
                    onChange={handleInputChange}
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a status</option>
                    {statusOptions.map((status) => (
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
          );

};

export default Reservation;