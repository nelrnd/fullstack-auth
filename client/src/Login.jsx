import { useState } from "react"
import Input from "./Input"
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
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button>Login</button>
      </form>

      <p>
        Don&apos;t have an account yet? <Link to="/register">Register</Link>
      </p>
    </>
  )
}

export default Login
