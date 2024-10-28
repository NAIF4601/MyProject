import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    // Check if stored data exists and matches the entered credentials
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      alert('Login successful!');
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      {/* Sign Up Link */}
      <div className="signup-link">
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>

    </div>
  );
}

export default Login;
