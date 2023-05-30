import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  };

  const fetchLoginData = async () => {
    const response = await fetch("http://localhost:3000/login", options);
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("Try again");
    }
  };

  const login = (e) => {
    e.preventDefault();
    fetchLoginData();
  };

  if (redirect) {
    return <Navigate to={"/secrets"} />;
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={login}>
        <div className="input-container">
          <div className="input-field">
            <label htmlFor="emal">Email</label>
            <input
              type="email"
              name="username"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
