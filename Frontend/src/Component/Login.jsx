import React, { useState } from "react";
const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Logging in with:", email, password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  error: {
    color: "#ff4d4f",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default LoginPage;
