const express = require('express')
const router = express.Router()

const { usersController } = require('../controllers')

// @route POST api/users/register
// @desc Registers a new user with their user details.
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body
    await usersController.register(
      firstName,
      lastName,
      email,
      mobileNumber,
      password
    )
  } catch (error) {
    console.error(error)
    res.status(error?.status ?? 400, error.message)
  }
})

// @route POST api/users/login
// @desc Login user with an email and password and return a signed token
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    await usersController.login(email, password)
  } catch (error) {
    console.error(error)
    res.status(error?.status ?? 400, error.message)
  }
})

module.exports = router
