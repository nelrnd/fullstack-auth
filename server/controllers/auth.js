const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  try {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 11),
    })

    await user.save()

    res.send({ message: "User was registered successfully!" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error while creating user" })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    const match = bcrypt.compareSync(req.body.password, user.password)
    if (!match) {
      return res.status(401).json({ message: "Invalid password" })
    }
    const SECRET = process.env.SECRET
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET)

    res.json({ message: "Login successful", token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error while logging in" })
  }
}

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const SECRET = process.env.SECRET
    const decodedToken = jwt.verify(token, SECRET)
    const user = decodedToken
    req.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: "Not authorized" })
  }
}
