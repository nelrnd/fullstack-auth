import { useState } from "react"
import Input from "../components/Input"
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
    <div className="mt-8 max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-6">Register</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <Input label="First name" value={firstName} setValue={setFirstName} />
        <Input label="Last name" value={lastName} setValue={setLastName} />
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button className="btn-primary">Register</button>
      </form>

      <p className="text-slate-600 mb-6">
        Have an account already?{" "}
        <Link to="/login" className="text-indigo-800 hover:text-indigo-900">
          Login
        </Link>
      </p>

      {message && <p>{message}</p>}
    </div>
  )
}

export default Register
