import { useEffect, useState } from "react"
import axios from "axios"

const PublicComponent = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:3000/free-route",
    }
    axios(config)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1>Public</h1>
      {message && <p>{message}</p>}
    </>
  )
}

export default PublicComponent
