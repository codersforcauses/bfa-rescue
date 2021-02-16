const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator').default

const SECRET_KEY = require('../config').SECRET_KEY
const StatusCodeError = require('../helpers/StatusCodeError')
const { User } = require('../models')

const ERR_NO_MATCH = 'Email or password does not match.'
const ERR_EMAIL_EXISTS = 'A user with that email already exists.'

async function register(firstName, lastName, email, mobileNumber, password) {
  const foundUser = await User.findOne({ email: email })

  if (foundUser) {
    throw new StatusCodeError(400, ERR_EMAIL_EXISTS)
  }

  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNumber: mobileNumber,
    password: password
  })

  return await user.save()
}

async function login(email, password) {
  const normalizedEmail = validator.normalizeEmail(email)
  const user = await User.findOne({ email: normalizedEmail })
  if (!user) {
    throw new StatusCodeError(404, ERR_NO_MATCH)
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error(400, ERR_NO_MATCH)
  }
  const payload = {
    id: user.id,
    email: user.email
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1yr' })

  return {
    success: true,
    token: 'Bearer ' + token
  }
}

const usersController = {
  register,
  login
}

module.exports = usersController
