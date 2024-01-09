import { useState } from "react"
import Input from "./Input"
import axios from "axios"
import { Link } from "react-router-dom"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const config = {
      method: "post",
      url: "http://localhost:3000/api/register",
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      },
    }
    axios(config)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <Input label="First name" value={firstName} setValue={setFirstName} />
        <Input label="Last name" value={lastName} setValue={setLastName} />
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button>Register</button>
      </form>

      <p>
        Have an account already? <Link to="/login">Login</Link>
      </p>

      {message && <p>{message}</p>}
    </>
  )
}

export default Register
