require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// connect to db
const MONGO_URL = process.env.MONGO_URL
const main = async () => mongoose.connect(MONGO_URL)
main().catch((err) => console.error(err))

app.get("/", (req, res) => res.send("Hello World!"))

const authRouter = require("./routes/auth")
app.use("/api", authRouter)

// for testing purpose
const authController = require("./controllers/auth")
app.get("/free-route", (req, res) => {
  res.json({ message: "You are free to access me anytime" })
})
app.get("/auth-route", authController.protect, (req, res) => {
  res.json({ message: "You are authorized to access me" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
