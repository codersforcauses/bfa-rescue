const mongoose = require('mongoose')
const validator = require('validator').default
const bcrypt = require('bcryptjs')

// Google's phone number parsing and validation library
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
const PNF = require('google-libphonenumber').PhoneNumberFormat

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value)
        },
        message: (props) => `${props.value} is not a valid email address.`
      }
    },
    mobileNumber: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          const phoneNumber = phoneUtil.parse(value, 'AU')
          return phoneUtil.isValidNumberForRegion(phoneNumber, 'AU')
        },
        message: (props) =>
          `${props.value} is not a valid Australian mobile number.`
      }
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

// Normalizing inputs middleware
userSchema.pre('save', async function (next) {
  try {
    // Hash password (so we don't have to work with hashing during tests and seeding)
    if (this.password && this.isModified('password')) {
      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
    }

    // Normalize email
    if (this.email && this.isModified('email')) {
      this.email = validator.normalizeEmail(this.email)
    }

    // Normalize mobile number
    if (this.mobileNumber && this.isModified('mobileNumber')) {
      try {
        const ausNumber = phoneUtil.parse(this.mobileNumber, 'AU')
        this.mobileNumber = phoneUtil.format(ausNumber, PNF.INTERNATIONAL)
      } catch (err) {
        console.error(
          `Cannot convert mobile number ${this.mobileNumber} to international format.`,
          err
        )
      }
    }

    next()
  } catch (error) {
    console.error(error)
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
