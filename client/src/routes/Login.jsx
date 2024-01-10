import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const config = {
      method: "post",
      url: "http://localhost:3000/api/login",
      data: { email, password },
    }
    axios(config)
      .then((res) => {
        const token = res.data.token
        localStorage.setItem("token", token)
        navigate("/dashboard")
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="mt-8 max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button className="btn-primary">Login</button>
      </form>

      <p className="text-slate-600 mb-6">
        Don&apos;t have an account yet?{" "}
        <Link to="/register" className="text-indigo-800 hover:text-indigo-900">
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
