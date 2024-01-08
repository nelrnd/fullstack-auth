require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// connect to db
const MONGO_URL = process.env.MONGO_URL
const main = async () => mongoose.connect(MONGO_URL)
main().catch((err) => console.error(err))

app.get("/", (req, res) => res.send("Hello World!"))

const authRouter = require("./routes/auth")
app.use("/api", authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
