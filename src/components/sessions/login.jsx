import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../stylesheets/login.css';
import { postRegister } from '../../features/sessions/sessionsSlice';

const Login = () => {
  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [clickedState, setClickedState] = useState(false);
  const [validMsgDisplayState, setValidMsgDisplayState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.sessions);
  console.log(userData);

  const userDispatch = () => {
    setClickedState(true);
    if (usernameState.length === 0) {
      setValidMsgDisplayState(true);
      setExistState(false);
    } else {
      dispatch(postRegister({ obj: { name: usernameState }, endpoint: 'login' }));
    }
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.loggedIn === false) {
      if (clickedState) {
        setExistState(true);
        setValidMsgDisplayState(false);
      }
    }
    if (userData.loggedIn === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);

      localStorage.setItem('userId', JSON.stringify(userData.user.id));
    }
    if (localStorage.getItem('logged_in') === 'true') {
      if (!userData) {
        dispatch(postRegister({ obj: { name: usernameState }, endpoint: 'login' }));
      }
      navigate('/helicopters');
    }
  }, [userData.message,
    userData.loggedIn, navigate, dispatch, userData, clickedState, usernameState]);

  return (
    <div className="signup-page">
      <div className="background-cover">
        <div className='register'>

        <h2 className="signup-title">Login</h2>
        <form className="form-page">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="name-input"
              value={usernameState}
              onChange={setUsername}
            />
            <div
              className="error"
              style={{
                display: existState ? 'inherit' : 'none',
              }}
            >
              <p>{userData ? userData.message : 'Something went wrong'}</p>
            </div>
            <div
              className="error"
              style={{
                display: validMsgDisplayState ? 'inherit' : 'none',
              }}
            >
              <p>Username field can not be empty</p>
            </div>
          </div>
          <button
            type="button"
            name="login"
            className="btn"
            onClick={userDispatch}
          >
            Log In
          </button>
          <div className="register-section">
            <em className="login-note">Have no account ?</em>
            <Link to="/" className="register-link">
              register
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
