import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../stylesheets/register.css';
import { postRegister } from '../../features/sessions/sessionsSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.sessions);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');
  const [clickedState, setClickedState] = useState(false);
  const [validDisplayState, setValidDisplayState] = useState(false);

  const validate = () => {
    setClickedState(true);
    if (usernameState.length === 0) {
      setValidMsgState('Username field cannot be empty');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length < 6) {
      setValidMsgState('Username must be at least 6 characters long');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length >= 6) {
      dispatch(
        postRegister({
          obj: { name: usernameState },
          endpoint: 'register',
        }),
      );
    }
  };

  const setUserName = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.loggedIn === false) {
      if (clickedState) {
        setExistState(true);
        setValidDisplayState(false);
      }
    }
    if (userData.loggedIn === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);
      localStorage.setItem('userId', userData.user.id);
    }
    if (localStorage.getItem('logged_in') === 'true') {
      if (!userData) {
        dispatch(
          postRegister({ obj: { name: usernameState }, endpoint: 'login' }),
        );
      }
      navigate('/helicopters');
    }
  }, [
    userData.message,
    userData.loggedIn,
    navigate,
    dispatch,
    userData,
    clickedState,
    usernameState
  ]);

  return (
    <div className="signup-page">
      <div className="background-cover">
        <div className='register'>
        <h2 className="signup-title">Register</h2>
        <form action="" className="form-page">
          <input
            type="input"
            name="name"
            placeholder="name"
            id="name"
            onChange={setUserName}
          />
          <div
            className="backend-error"
            style={{
              display: existState ? 'inherit' : 'none',
            }}
          >
            <p>{userData.message}</p>
          </div>
          <div
            className="error"
            style={{
              display: validDisplayState ? 'inherit' : 'none',
            }}
          >
            <p>{validMsgState}</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={validate}>
            Register
          </button>
          <p className="session-redirect">
            <em>Already a member?</em>
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
