import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setFullname] = useState("");

  const getInputData = async (e) => {
    e.preventDefault();
    console.log(email, name, username, password);
    setUsername("");
    setPassword("");
    setEmail("");
    setFullname("");

    const user = { email, username, password, name };
    try {
      const response = await axios.post(
        "https://nits-hacks-backend.onrender.com/api/v1/user/register",
        user,
        {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
       toast.error(error.response.data.message);
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
            value={email}
            type="email"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <CiUser size={30} />
        </div>
        <div className="flex input-div">
          <input
            className="input "
            value={name}
            type="text"
            placeholder="FULLNAME"
            onChange={(e) => setFullname(e.target.value)}
          ></input>
          <CiUser size={30} />
        </div>
        <div className="flex input-div">
          <input
            className="input "
            value={username}
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <CiLock size={30} />
        </div>
        <div className="flex input-div">
          <input
            className="input"
            value={password}
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <CiLock size={30} />
        </div>
        <button className="login-button">CONTINUE</button>
      </form>
    </>
  );
};

export default Register;
