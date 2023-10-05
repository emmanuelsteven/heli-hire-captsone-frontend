import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsignup } from '../../features/signup/signupSlice';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.signup);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(fetchsignup(formData));
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

      <h2 className='signup-title'>Sign Up</h2>
      <form className='form-page' onSubmit={handleSubmit}>
        <div>
          <input
           placeholder='Username'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
        </div>
        </div>
    </div>
  );
};

export default Signup;
