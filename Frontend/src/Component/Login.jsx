import React, { useState, useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser, CiLock } from "react-icons/ci";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { setIsLogged } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getInputData = async (e) => {
    e.preventDefault();

    const user = { email, password };
    try {
      const response = await axios.post(
        "https://nits-hacks-backend.onrender.com/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setIsLogged(true); // Update log state on successful login
      navigate("/browse");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <form className="login-form" onSubmit={getInputData}>
        <FaRegUserCircle size={50} />
        <div className="flex input-div">
          <input
            className="input"
            placeholder="EMAIL"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CiUser size={30} />
        </div>
        <div className="flex input-div">
          <input
            className="input"
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CiLock size={30} />
        </div>
        <button className="login-button" type="submit">
          CONTINUE
        </button>
      </form>
    </>
  );
};

export default Login;
