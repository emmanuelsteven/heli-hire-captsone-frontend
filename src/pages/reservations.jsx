import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getReservations } from '../features/reservations/reservationSlice';
import { fetchHelicopters } from '../features/helicopters/helicopterSlice';
import '../stylesheets/reservations.css';
import LayoutComponent from "../components/Layout";

const Reservations = () => {
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));
  const user = JSON.parse(window.localStorage.getItem('userId'));
  const helicopters = useSelector((state) => state.helicopter.helicopter);
  const { reservation } = useSelector((state) => state.reservations);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (helicopters.length === 0) {
      dispatch(fetchHelicopters());
    }
    dispatch(getReservations());
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [dispatch, isLoggedIn, navigate, helicopters]);

  const sortReservations = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  };

  const userReservations = reservation.filter(
    (reservation) => reservation.user_id === user,
  );
  const sortedReservations = userReservations.slice().sort(sortReservations);

  return (
    <LayoutComponent>
    <div className="reservations-main-container">
      <div className="reservations-container">
        {isLoggedIn ? (
          <div className="reservations-list-container">
            <h1 className="reservations-title">My Reservations</h1>
            {sortedReservations.length !== 0 ? (
              <div className="reservations-list">
                <p className="next-appointment-info">
                  Your next appointment is on
                  {' '}
                  {new Date(sortedReservations[0].date)
                    .toUTCString()
                    .substring(0, 16)}
                  {' '}
                  in
                  {' '}
                  {sortedReservations[0].city}
                  {' '}
                  with
                  {' '}
                  {sortedReservations[0].helicopter}
                </p>
                <table className="reservations-table">
                  <thead>
                    <tr>
                      <th>Helicopter Name</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedReservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td>
                          {(() => {
                            const foundHelicopter = helicopters.find(
                              (helicopter) => helicopter.id === reservation.helicopter_id,
                            );
                            let helicopterName = '';
                            if (foundHelicopter) {
                              helicopterName = foundHelicopter.name;
                            }
                            return helicopterName;
                          })()}
                        </td>
                        <td>{reservation.city}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/new-reservation" className="p-4 rounded-full shadow-lg bg-[#81bf0fc8]">
                  Click here to reserve a helicopter
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-around">
                <p className="m-4">You have no reservations</p>
                <Link to="/new-reservation" className="p-4 rounded-full shadow-lg bg-[#81bf0fc8]">
                  Click here to reserve a helicopter
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="popup_msg">
            <p className="popup_msg_text">
              You need to be logged in to see your reservations
            </p>
          </div>
        )}
      </div>
    </div>
    </LayoutComponent>
  );
 
};

export default Reservations;
