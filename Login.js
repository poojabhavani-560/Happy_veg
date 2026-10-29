import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    // Demo login: real authentication is not connected.
    setLoginSuccess(true);
  }

  if (loginSuccess) {
    return (
      <section className="form-page login-page">
        <div className="site-form login-transparent-form login-success">
          <h1>Login Successful!</h1>

          <p>Welcome to HappyVeg!</p>

          <p>You can now continue shopping for fresh vegetables.</p>

          <button
            type="button"
            className="green-button"
            onClick={() => navigate("/vegetables")}
          >
            Continue Shopping
          </button>

          <p className="form-help">
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page login-page">
      <form
        className="site-form login-transparent-form"
        onSubmit={submit}
      >
        <h1>Login</h1>

        <label htmlFor="login-email">Email / Username</label>
        <input
          id="login-email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email or username"
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="green-button">
          Login
        </button>

        <p className="form-help">
          Don't have an account?{" "}
          <Link to="/accountcreation">Sign up</Link>
        </p>

        <p className="form-help">
          <a href="mailto:support@happyveg.example?subject=Password%20help">
            Forgot password?
          </a>
        </p>
      </form>
    </section>
  );
}

export default Login;