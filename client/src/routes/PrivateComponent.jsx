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
    <div className="max-w-lg m-auto mt-8">
      <h1 className="font-bold text-3xl mb-4">Private</h1>
      {message && <p className="text-gray-600">{message}</p>}
    </div>
  )
}

export default PrivateRoute
