const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SECRET_KEY = require('../config').SECRET_KEY

const User = require('../models/User')

const router = express.Router()

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
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
      name: user.name
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
