import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div id="login">
      <h1>Sales Tax Search</h1>
      <form action="#" method="get" className="login-form">
        <fieldset>
          <dl>
            <dt>Username</dt>
            <dd><input type="text" required/></dd>
            <dt>Password</dt>
            <dd><input type="password" required/></dd>
          </dl>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </div>
  );
}
