import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doctorLogin } from '../../redux/actions/authAction';
import './Login.css'

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doctorLogin({ email, password }));
  };

  if (isAuthenticated) {
    navigate('/doctor-dashboard');
  }

  return (
    <form onSubmit={handleSubmit}  className="login-form mt-4">
           <div className="mb-3">
         <label className="form-label">Doctor Email <span className="text-danger">*</span></label>


      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      </div>
      <div className="mb-3">
     <label className="form-label">Password <span className="text-danger">*</span></label>

      <input
       className="form-control"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
            </div>
    <div className="d-grid">

      <button  className="btn btn-primary" type="submit">
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {/* {error && <div className="alert alert-danger mt-2 text-center">{error}</div>} */}
  {error && <div className="alert alert-danger mt-2 text-center">{error}</div>}

      </div>

    </form>
  );
};

export default DoctorLogin;
