import React from "react";

function Login() {
  return (
    <div className="Login">
      <form>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
