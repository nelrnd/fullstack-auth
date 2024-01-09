import { useState } from "react"
import Input from "./Input"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <h1>Login</h1>

      <form>
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
