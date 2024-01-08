const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  try {
    const user = new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
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
}