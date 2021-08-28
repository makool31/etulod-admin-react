import React, { useState } from "react";
import "./App.css";
//import { useHistory } from 'react-router-dom';
import LoginForm from "./components/LoginForm";

//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Auth() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,

        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div>
          <h2>
            Welcome, Admin <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Auth;
