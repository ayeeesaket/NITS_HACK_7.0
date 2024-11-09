import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogged(false); // Set log to false on logout
    navigate("/");
  };

  return (
    <>
      <div className="navbar pt-3 flex justify-around h-[17vh] w-[100vw] bg-white text-black font-bold align-middle">
        <div className="flex items-center gap-3">
          <div className="logo"></div>
          <div className="divider h-10 w-[2px] bg-gray-400"></div>
          <div className="navbar-left flex-col text-lg">
            <div className="head-hindi">नागरिक और संविधान</div>
            <div className="head-english">Nagrik Aur Sanvidhan</div>
          </div>
        </div>
        <div className="navbar-mid flex gap-10 justify-center pt-8">
          <div className="home nav-but" onClick={() => navigate("/browse")}>
            Home
          </div>
          <div className="learn nav-but" onClick={() => navigate("/Quiz")}>
            Quiz
          </div>
          <div
            className="actsandrules nav-but"
            onClick={() => navigate("/Book")}
          >
            Acts and Rules
          </div>
          <div className="about nav-but">About</div>
        </div>
        <div className="navbar-right flex gap-10 pt-8">
          <div className="create nav-but" onClick={() => navigate("/Register")}>
            {isLogged ? "" : "Create "}
            
          </div>
          <div
            className="login nav-but"
            onClick={isLogged ? handleLogout : () => navigate("/")}
          >
            {isLogged ? "Logout" : "Login"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
