import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import Dashboard from "./Dashboard.jsx"
import AuthRoute from "./AuthRoute.jsx"
import PublicComponent from "./PublicComponent.jsx"
import PrivateComponent from "./PrivateComponent.jsx"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/public",
    element: <PublicComponent />,
  },
  {
    // protected routes
    element: <AuthRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/private",
        element: <PrivateComponent />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
