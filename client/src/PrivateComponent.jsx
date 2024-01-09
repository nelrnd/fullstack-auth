import { useEffect, useState } from "react"
import axios from "axios"

const PrivateRoute = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    const config = {
      method: "get",
      url: "http://localhost:3000/auth-route",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    axios(config)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1>Private</h1>
      {message && <p>{message}</p>}
    </>
  )
}

export default PrivateRoute
