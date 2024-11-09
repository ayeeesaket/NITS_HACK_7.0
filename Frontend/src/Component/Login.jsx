import React, { useState, useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser, CiLock } from "react-icons/ci";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { SyncLoader } from "react-spinners";

const Login = () => {
  const [isLoader, setIsLoader] = useState(false);
  const { setIsLogged } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getInputData = async (e) => {
    e.preventDefault();
    setIsLoader(true); // Show loader when login starts

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

    setIsLoader(false); // Hide loader after login attempt
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar />

      {/* Loader Overlay */}
      {isLoader && (
        <div className="loader-overlay">
          <SyncLoader color="#9bff89" margin={10} size={30} />
        </div>
      )}

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

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
      `}</style>
    </>
  );
};

export default Login;
