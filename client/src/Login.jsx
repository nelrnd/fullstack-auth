import { useState } from "react"
import Input from "./Input"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
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
