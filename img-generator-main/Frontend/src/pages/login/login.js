import PointsContext from "../../context/pointsContext";
import Navbar from "../common/navbar/navbar";
import { useState, useContext } from "react";
import "./login.css";

const Login = () => {
  const { login } = useContext(PointsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const res = await fetch(`https://img-generator-edna.onrender.com/api/v1/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.status === "success") {
        localStorage.setItem("authorization", data.data.token);
        login();
        alert("you have successfully LoggedIn");
        
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login. Please try again.");
    }
  }

  return (
    <div>
      <Navbar page='login' />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} className="login-button">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
