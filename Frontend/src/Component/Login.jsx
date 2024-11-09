import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getInputData = async (e) => {
    e.preventDefault();
    console.log(email, password);

    setPassword("");
    setEmail("");

const user = { email, password };
try {
  const response = await axios.post(
    "https://nits-hacks-backend.onrender.com/api/v1/user/login",
    user,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,

    }
  );
  navigate("/browse");
  console.log(response);
} catch (error) {
  console.log(error);

  // Safely access the error message
  const errorMessage =
    error.response?.data?.message || "An error occurred. Please try again.";
  toast.error(errorMessage); // Corrected access
}

  };
  return (
    <>
      <Navbar />
      <form className="login-form" onSubmit={getInputData}>
        <FaRegUserCircle size={50} className="" />
        <div className="flex input-div">
          <input
            className="input "
            placeholder="EMAIL"
            type="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <CiUser size={30} />
        </div>
        <div className="flex input-div">
          <input
            className="input "
            placeholder="PASSWORD"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <CiLock size={30} />
        </div>
        <button className="login-button">CONTINUE</button>
      </form>
    </>
  );
};

export default Login;
