import React from "react";
import { NavLink } from "react-router-dom";

function Login({ loggedIn, onLogin, user, onUser, password, onPassword, error, onError }) {

  function logIn() {
    onLogin()
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    onLogin();
    onPassword("");
  }

  function handleUserState(e) {
    onUser(e.target.value);
  }

  function handlePasswordState(e) {
    onPassword(e.target.value);
  }

  function resetForm() {
    onError(false);
  }

  if (loggedIn) {
    return (
      <div className="Login">
        <button type="button" onClick={logIn}>Log Out</button>
      </div>
    );
  } else if (!error) {
    return (
      <div className="Login">
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleUserState}
            value={user}
            >
          </input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordState}
            value={password}
          >
          </input>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Error">
        <h2>Wrong Username or Password.</h2>
        <button type="button" onClick={resetForm}>Try Again</button>
        <NavLink
          to="/"
          exact
          activeStyle={{
            color: "white"
          }}
        >
          Cancel
        </NavLink>
      </div>
    );
  }
}

export default Login;
