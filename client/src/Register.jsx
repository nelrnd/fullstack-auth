import { useState } from "react"
import Input from "./Input"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register
