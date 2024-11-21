import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { employeeLogin } from '../../redux/actions/authAction';
import './Login.css'

const EmployeeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, userType } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(employeeLogin({ email, password }));
  };

  if (isAuthenticated && userType === 'employee') {
    navigate('/employee-dashboard');
  }

  return (
    <form onSubmit={handleSubmit} className="login-form mt-4">
    <div className="mb-3">
    <label className="form-label">Employee Email <span className="text-danger">*</span></label>

      <input
        type="email"
         className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
       </div>
          <div className="mb-3">
     <label className="form-label">Password <span className="text-danger">*</span></label>

      <input
        type="password"
         className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /> </div>
      <div className="d-grid">

      <button type="submit"className="btn btn-primary" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </form>
  );
};

export default EmployeeLogin;
