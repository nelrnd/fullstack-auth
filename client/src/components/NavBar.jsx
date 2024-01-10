import { useNavigate, Link } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav className="border-b border-b-gray-200 shadow-sm h-24 px-8 flex items-center justify-between">
      <h3 className="font-bold text-2xl">FullstackAuth</h3>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={logout} className="btn-primary">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
