import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './Login'
const Body = () => {
    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        }
    ])
  return (
    <>
    <RouterProvider router={approuter}/>
    </>
  )
}

export default Body
