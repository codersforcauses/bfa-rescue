const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SECRET_KEY = require('../config').SECRET_KEY

const User = require('../models/User')

const router = express.Router()

// @route POST /users/register
// @desc Registers a new user using a username and password.
router.post('/register', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    }

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      password: req.body.password
    })

    const savedUser = await newUser.save()

    res.json(savedUser)
  } catch (error) {
    console.error(error)
  }
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ passwordincorrect: 'Password incorrect' })
    }
    const payload = {
      id: user.id,
      email: user.email
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1yr' })

    res.json({
      success: true,
      token: 'Bearer ' + token
    })
  } catch (error) {
    console.error(error)
  }
})

router.get('/', async (req, res) => {
  const allUsers = await User.find({})
  res.json(allUsers)
})

module.exports = router
