import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import RegisterForm from "./Register";
import Video2 from "./Video2";
import Video3 from "./Video3";
import Video1 from "./Video1";
import Quiz from "./Quiz";
import Book from "./Book";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/Register",
      element: <RegisterForm />,
    },
    {
      path: "/Video1",
      element: <Video1 />,
    },
    {
      path: "/Video2",
      element: <Video2 />,
    },
    {
      path: "/Video3",
      element: <Video3 />,
    },
    {
      path: "/Quiz",
      element: <Quiz />,
    },
    {
      path: "/Book",
      element: <Book />,
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
};

export default Body;
