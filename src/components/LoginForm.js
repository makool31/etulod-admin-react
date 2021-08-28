import React, { useState } from "react";
//import {Dashboard} from './Dashboard'
//import {Link} from 'react-router-dom'
import Dashboard from "./Dashboard";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const history = useHistory;

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

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Admin</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          LOGIN
        </button>
      </div>
      <div className="App">
        {user.email !== "" ? (
          <div>
            <Route
              path="/dashboard"
              exact
              component={() => <Dashboard authorized={false} />}
            />
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </form>
  );
}
export default LoginForm;
