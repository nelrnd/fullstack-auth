import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default NavBar
