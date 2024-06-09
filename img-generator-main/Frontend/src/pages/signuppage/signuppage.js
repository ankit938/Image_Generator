import React, { useState } from "react";
import Navbar from "../common/navbar/navbar";
import "./signuppage.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    const res = await fetch('https://img-generator-edna.onrender.com/api/v1/auth/signup', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Navbar page='signup' />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleClick} className="signup-button">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
