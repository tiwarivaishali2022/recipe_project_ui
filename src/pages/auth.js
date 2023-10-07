import React, { useState } from "react";
// import { Login } from "./login/login";
// import { Register } from "./register/register";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert(`Please provide username & password!`);
      return false;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/auth/login",
        {
          username,
          password,
        }
      );
      console.log("response", JSON.stringify(response));

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


const Register = () => {
  const [name, setName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [_, setCookies] = useCookies(["access_token"]);
  // const navigate = useNavigate();

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setName("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !username || !password) {
      alert(`Please provide name, username & password!`);
      return false;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/auth/register",
        {
          name,
          username,
          password,
        }
      );
      console.log("response", JSON.stringify(response));
      alert("Registration Completed! Now login.");

      resetForm();

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

