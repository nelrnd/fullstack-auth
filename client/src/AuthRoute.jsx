import { Navigate, useLocation, Outlet } from "react-router-dom"

const AuthRoute = () => {
  const location = useLocation()
  const path = location.pathname
  const token = localStorage.getItem("token")

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ prevLocation: path }} />
  )
}

export default AuthRoute
