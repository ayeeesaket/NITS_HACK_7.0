import Navbar from "./Component/Navbar";
import Book from "./Component/Book";
import Slider from "./Component/Slider";
import ActsandRules from "./Component/ActsandRules";
import Video1 from "./Component/Video1";
import Video2 from "./Component/Video2";
import Video3 from "./Component/Video3";
import Quiz from "./Component/Quiz";
import Body from "./Component/Body";
import Login from "./Component/Login";
import RegisterForm from "./Component/Register";
import Browse from "./Component/Browse";
import toast, { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Component/AuthContext";
// import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <><AuthProvider>
      {/* <Navbar /> */}
      {/* <Book /> */}
      {/* <Slider />
      <ActsandRules /> */}
      {/* <Video1/> */}
      {/* <Video2/> */}
      {/* <Video3/> */}
      {/* <Quiz/> */}
      <Body />
      <Toaster/>
      {/* <Login/> */}
      {/* <RegisterForm/> */}
      </AuthProvider>
    </>
  );
};

export default App;
