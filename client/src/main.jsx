import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Login from "./routes/Login.jsx"
import Register from "./routes/Register.jsx"
import Dashboard from "./routes/Dashboard.jsx"
import AuthRoute from "./components/AuthRoute.jsx"
import PublicComponent from "./routes/PublicComponent.jsx"
import PrivateComponent from "./routes/PrivateComponent.jsx"
import Root from "./routes/Root.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace={true} />,
  },
  {
    element: <Root />,
    children: [
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
