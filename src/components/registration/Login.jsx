import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchlogin } from '../../features/Login/loginSlice';


const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(fetchlogin(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='signup-page'>
    <div className='background-cover'>
        <div className='register'>

      <h2 className='signup-title'>Login</h2>
      <form className='form-page' onSubmit={handleSubmit}>
        <div>
          <input
          placeholder='email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
          placeholder='password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn' type="submit" disabled={loading}>
          {loading ? 'loging in...' : 'Login'}
        </button>
      </form>
        </div>
        </div>
    </div>
  );
};

export default Login;
